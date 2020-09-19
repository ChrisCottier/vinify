from random import seed, randint


def matches_dict(rows):
    matches = [{
        "id": row[0],
        # "url": row[1],
        "wine_type": row[2],
        "avg_price": row[3],
        "name": row[4],
        "vintage": row[5],
        "color": row[6],
        "verietal": row[7],
        # "description": row[8],
        "primary_image": row[9],
        "country": row[10],
        "state_province": row[11],
        "region": row[12],
        "winery": row[13],
        # "community_rank": str(row[14]),
        # "pairings": row[15],
        # "photos": row[16],
        "created_at": row[17],
        "update_at": row[18],
    }
        for row in rows]
    return matches


def choose_random(array, num_chosen):
    if len(array) < num_chosen:
        num_chosen = len(array)
    chosen_indeces = []
    while num_chosen > 0:
        if len(array) > 1:
            index = randint(0, len(array) - 1)
        else:
            index = 0
        popped = array.pop(index)
        chosen_indeces.append(popped)
        num_chosen -= 1
    return chosen_indeces


def red_wine_form_sql(selections):
    query = "SELECT * FROM wines WHERE lower(color) LIKE lower('red')"
    # WITH(INDEX(wine_indeces))
    countries = countries_sql(selections['country'])
    prices = avg_price_sql(selections['price'])
    verietal = verietal_sql(selections['verietal'])
    # rating = wine_ratings_sql(selections['rating'])
    notes = wine_notes_sql(selections['notes'])

    return f'{query} {countries} {prices} {verietal} {notes}'


def white_wine_form_sql(selections):
    query = "SELECT * FROM wines WHERE lower(color) LIKE lower('white')"
    countries = countries_sql(selections['country'])
    bubbles = wine_bubbles_sql(selections['bubbles'])
    prices = avg_price_sql(selections['price'])
    verietal = verietal_sql(selections['verietal'])
    notes = wine_notes_sql(selections['notes'])

    return f'{query} {bubbles} {countries} {prices} {verietal} {notes}'


def countries_sql(countries):
    if 'anywhere' in countries:
        return ''
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
    print(rating)
    minimum = float(rating[0][6:])
    return f'AND community_rank > {minimum}'


def wine_notes_sql(notes):
    if ('any' in notes):
        return ''
    statements = []

    # The arrays below add these wine buzzwords to the search query, expanding the net
    dark_fruits = ['plum', 'blackberry',
                   'currant', 'blueberry', 'fig', 'prune']
    bright_fruits = ['cherry', 'raspberry', 'strawberry',
                     'cranberry', 'candied', 'pomegranate']

    citrus = ['lemon', 'orange', 'lime']
    stone_fruits = ['apricot', 'peach', 'lychee']
    tropical_fruits = ['mango', 'passion', 'papaya', 'pineapple', 'coconut']

    for note in notes:
        statements.append(
            f"lower(description) LIKE lower('%{note}%')")

        if (note == 'dark fruit'):
            for fruit in dark_fruits:
                statements.append(
                    f"lower(description) LIKE lower('%{fruit}%')")
        if (note == 'bright fruit'):
            for fruit in bright_fruits:
                statements.append(
                    f"lower(description) LIKE lower('%{fruit}%')")

        if (note == 'citrus'):
            for fruit in citrus:
                statements.append(
                    f"lower(description) LIKE lower('%{fruit}%')")
        if (note == 'stone fruit'):
            for fruit in stone_fruits:
                statements.append(
                    f"lower(description) LIKE lower('%{fruit}%')")
        if (note == 'tropical fruit'):
            for fruit in tropical_fruits:
                statements.append(
                    f"lower(description) LIKE lower('%{fruit}%')")

    sql_formatted = ' OR '.join(statements)
    return f'AND ({sql_formatted})'


def wine_bubbles_sql(bubbles):
    if ('no bubbles' in bubbles):
        return f"AND NOT (lower(name) LIKE lower('%sparkling%') OR lower(name) LIKE lower('%cava%') OR lower(name) LIKE lower('%champagne%') OR lower(state_province) LIKE lower('%champagne%') OR lower(name) LIKE lower('%prosecco%'))"
    statements = []
    for bubble in bubbles:
        statements.append(
            f"(lower(name) LIKE lower('%{bubble}%') OR lower(state_province) LIKE lower('%{bubble}%'))")
    sql_formatted = ' OR '.join(statements)
    return f'AND ({sql_formatted})'
