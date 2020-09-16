def matches_dict(rows):
    matches = [{
        "id": row[0],
        "url": row[1],
        "name": row[2],
        "wine_type": row[3],
        "avg_price": row[4],
        "vintage": row[5],
        "color": row[6],
        "verietal": row[7],
        "description": row[8],
        "primary_image": row[9],
        "country": row[10],
        "state_province": row[11],
        "region": row[12],
        "winery": row[13],
        "community_rank": str(row[14]),
        "parings": row[15],
        "photos": row[16],
        "created_at": row[17],
        "update_at": row[18],
    }
        for row in rows]
    return matches


def red_wine_form_sql(selections):
    query = "SELECT * FROM wines WHERE lower(color) LIKE lower('red')"
    # WITH(INDEX(wine_indeces))
    countries = countries_sql(selections['country'])
    prices = avg_price_sql(selections['price'])
    verietal = verietal_sql(selections['verietal'])
    rating = wine_ratings_sql(selections['wineRating'])

    return f'{query} {countries} {prices} {verietal} {rating}'


def countries_sql(countries):
    initial = f"AND (lower(country) LIKE lower('%{countries[0]}%')"
    for i in range(1, len(countries)):
        initial += f" OR lower(country) LIKE lower('%{countries[i]}%')"
    return initial + ')'


def avg_price_sql(prices):
    statements = []
    for price in prices:
        if (price == 'under $20'):
            statements.append('avg_price < 20')
        if (price == "from $20 to $40"):
            statements.append('(avg_price > 20 AND avg_price < 40)')
        if (price == "from $40 to $60"):
            statements.append('(avg_price > 40 AND avg_price < 60)')
        if (price == "from $60 to $100"):
            statements.append('(avg_price > 60 AND avg_price < 100)')
        if (price == 'over $100'):
            statements.append('avg_price > 100')
    sql_formatted = ' OR '.join(statements)
    return f'AND ({sql_formatted})'


def verietal_sql(verietals):
    if ('all' in verietals):
        return ''
    statements = []
    for verietal in verietals:
        statements.append(
            f"(lower(verietal) LIKE lower('%{verietal}%') OR lower(name) LIKE lower('%{verietal}%'))")
    sql_formatted = ' OR '.join(statements)
    return f'AND ({sql_formatted})'


def wine_ratings_sql(rating):
    if ('any' in rating):
        return ''
    minimum = float(rating[0][7:])
    return f'AND community_rank > {minimum}'


def wine_notes(notes):
    if ('any' in notes):
        return ''
    statements = []
    for note in notes:
        # TO DO***********************************
        statements.append(
            f"(lower(verietal) LIKE lower('%{verietal}%') OR lower(name) LIKE lower('%{verietal}%'))")
    sql_formatted = ' OR '.join(statements)
    return f'AND ({sql_formatted})'
