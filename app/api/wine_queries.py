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
    query = f"SELECT * FROM wines WHERE lower(color) LIKE lower('%red%')"
    # WITH(INDEX(wine_indeces))
    countries = countries_sql(selections['country'])
    prices = avg_price_sql(selections['price'])
    verietal = verietal_sql(selections['verietal'])
    # rating = wine_ratings_sql(selections['rating'])
    notes = wine_notes_sql(selections['notes'], selections['notesAreAnd'])

    return f'{query} {countries} {prices} {verietal} {notes}'


def white_wine_form_sql(selections):
    query = f"SELECT * FROM wines WHERE lower(color) LIKE lower('%white%')"
    countries = countries_sql(selections['country'])
    bubbles = wine_bubbles_sql(selections['bubbles'])
    prices = avg_price_sql(selections['price'])
    verietal = verietal_sql(selections['verietal'])
    notes = wine_notes_sql(selections['notes'], selections['notesAreAnd'])

    return f'{query} {bubbles} {countries} {prices} {verietal} {notes}'


def rose_wine_form_sql(selections):
    query = f"SELECT * FROM wines WHERE lower(wine_type) LIKE lower('%ros%')"
    notes = wine_notes_sql(selections['notes'], selections['notesAreAnd'])

    return f'{query} {notes}'


def pairing_wine_form_sql(selections):
    query = f"SELECT * FROM wines WHERE"
    pairing = wine_pairing_sql(selections['pairings'])

    return f'{query} {pairing}'


def wine_pairing_sql(pairings):
  # if ('no bubbles' in bubbles):
  #       return f"AND NOT (lower(name) LIKE lower('%sparkling%') OR lower(name) LIKE lower('%cava%') OR lower(name) LIKE lower('%champagne%') OR lower(state_province) LIKE lower('%champagne%') OR lower(name) LIKE lower('%prosecco%'))"
    statements = []
    beef = ['beef', 'steak']
    white_fish = ['white fish', 'cod', 'halibut', 'snapper', 'bass', 'pollock']
    fruit_pie = ['apple pie', 'peach pie', 'cherry pie',
                 'fruit pie', 'cobbler', 'straberry short']
    cookies = ['cookie']
    sweet_cake = ['chocolate cake', 'angel food cake', 'pound cake']
    fruit_sorbet = ['sorbet', 'strawberries', 'raspberries']
    mexican = ['mexican', 'taco', 'burrito']
    italian = ['italian', 'pasta', 'risotto', 'lasagne',
               'polenta', 'spaghetti', 'ravioli', 'pesto']
    BBQ = ['BBQ', 'barbeque']
    # TODOOOO finish pairings
    for pairing in pairings:
        # also adding related keywords to query
        if pairing == 'beef':
            statements.append(pairing_matching_terms(beef))
        elif pairing == 'white fish':
            statements.append(pairing_matching_terms(white_fish))
        elif pairing == 'fruit pie':
            statements.append(pairing_matching_terms(fruit_pie))
        elif pairing == 'cookies':
            statements.append(pairing_matching_terms(cookies))
        elif pairing == 'sweet cake':
            statements.append(pairing_matching_terms(sweet_cake))
        elif pairing == 'fruit':
            statements.append(pairing_matching_terms(fruit_sorbet))
        elif pairing == 'Mexican':
            statements.append(pairing_matching_terms(mexican))
        elif pairing == 'Italian':
            statements.append(pairing_matching_terms(italian))
        elif pairing == 'BBQ':
            statements.append(pairing_matching_terms(BBQ))
        else:
            statements.append(
                f"(lower(pairings) LIKE lower('%{pairing}%') OR lower(description) LIKE lower('%{pairing}%'))")

    sql_formatted = ' OR '.join(statements)
    return f'({sql_formatted})'


def pairing_matching_terms(array):
    addition = []
    for ele in array:
        addition.append(
            f"(lower(pairings) LIKE lower('%{ele}%') OR lower(description) LIKE lower('%{ele}%'))")
    joined_additions = ' OR '.join(addition)
    # statements.append(f'({joined_additions})')
    return f'({joined_additions})'


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
    if ('anything' in verietals):
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
    minimum = float(rating[0][6:])
    return f'AND community_rank > {minimum}'


def wine_notes_sql(notes, notes_are_and):
    if ('any' in notes):
        return ''
    statements = []

    # The arrays below add these wine buzzwords to the search query, expanding the net
    # red
    earthy_notes = ['earth', 'soil', 'slate', 'graphite']
    herbs = ['herb', 'parsley', 'sage', 'rosemary', 'thyme', 'tarragon']
    dark_fruits = ['dark fruit', 'plum', 'blackberry',
                   'currant', 'blueberry', 'fig', 'prune', 'jam']
    bright_fruits = ['bright fruit', 'cherry', 'raspberry', 'strawberry',
                     'cranberry', 'pomegranate']
    savory = ['savor', 'savour', 'pork', 'lamb', 'beef', 'full bod', 'pepper']

    # white
    citrus = ['citrus', 'lemon', 'orange', 'lime']
    stone_fruits = ['stone fruit', 'apricot', 'peach', 'lychee']
    tropical_fruits = ['tropical', 'mango',
                       'passion', 'papaya', 'pineapple', 'coconut']
    creamy = ['smooth', 'creamy', 'milk', 'butter', 'popcorn', 'oil']

    # rose
    sweets = ['sweet', 'candy', 'sugar']
    florals = ['floral', 'flowers', 'lavender', 'rose', 'magnolia', 'lillies']
    melons = ['watermelon', 'melon', 'honeydew',
              'cucumber', 'celery', 'cantaloupe']

    for note in notes:
        if (note == 'dark fruit'):
            # THIS Section could be made more DRY
            # addition = []
            # for fruit in dark_fruits:
            #     addition.append(f"lower(description) LIKE lower('%{fruit}%')")
            # joined_additions = ' OR '.join(addition)
            # statements.append(f'({joined_additions})'
            statements.append(note_matching_terms(dark_fruits))
        elif (note == 'earthy'):
            statements.append(note_matching_terms(earthy_notes))
        elif (note == 'herbaceous'):
            statements.append(note_matching_terms(herbs))
        elif (note == 'bright fruit' or note == 'fruity'):
            statements.append(note_matching_terms(bright_fruits))
        elif (note == 'savory'):
            statements.append(note_matching_terms(savory))

        elif (note == 'citrus' or note == 'zesty'):
            statements.append(note_matching_terms(citrus))
        elif (note == 'stone fruit'):
            statements.append(note_matching_terms(stone_fruits))
        elif (note == 'tropical fruit'):
            statements.append(note_matching_terms(tropical_fruits))
        elif (note == 'floral'):
            statements.append(note_matching_terms(florals))
        elif (note == 'sweet'):
            statements.append(note_matching_terms(sweets))
        elif (note == 'creamy'):
            statements.append(note_matching_terms(creamy))

        elif (note == 'melon-y'):
            statements.append(note_matching_terms(melons))
        else:
            statements.append(
                f"lower(description) LIKE lower('%{note}%')")

    sql_formatted = ''
    # This turnary takes into account if the user is querying and or or for notes
    if (notes_are_and):
        sql_formatted = ' AND '.join(statements)
    else:
        sql_formatted = ' OR '.join(statements)

    return f'AND ({sql_formatted})'


def note_matching_terms(array):
    addition = []
    for ele in array:
        addition.append(f"lower(description) LIKE lower('%{ele}%')")
    joined_additions = ' OR '.join(addition)
    # statements.append(f'({joined_additions})')
    return f'({joined_additions})'


def wine_bubbles_sql(bubbles):
    if ('no bubbles' in bubbles):
        return f"AND NOT (lower(name) LIKE lower('%sparkling%') OR lower(name) LIKE lower('%cava%') OR lower(name) LIKE lower('%champagne%') OR lower(state_province) LIKE lower('%champagne%') OR lower(name) LIKE lower('%prosecco%'))"
    statements = []
    for bubble in bubbles:
        statements.append(
            f"(lower(name) LIKE lower('%{bubble}%') OR lower(state_province) LIKE lower('%{bubble}%'))")
    sql_formatted = ' OR '.join(statements)
    return f'AND ({sql_formatted})'
