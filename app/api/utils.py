def red_wine_form_sql(selections):
    query = "SELECT * FROM wines WITH(INDEX(wine_indeces))WHERE wines.color = red"
    countries = countries_sql(selections['country'])

    return f'{query} {countries};'


def countries_sql(countries):
    initial = f"AND (lower(country) LIKE lower('%{countries[0]}%')"
    for i in range(1, len(countries)):
        initial += f"OR lower(country) LIKE lower('%{countries[i]}%')"
    return initial + ')'
