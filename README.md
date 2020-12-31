# Vinify

Vinify is wine recommendation application that gives users the ability to describe what they are looking for in a wine and delivers tailored recommendations and wine details
based on real-world wine data.

Live demo: https://vinify.herokuapp.com/

## Technologies

- Backend: Python / Flask / SQLAlchemy / PostgreSQL
- Frontend: React / Redux
- Amazon RDS
- python scrapy, scrapy-splash, BeautifulSoup

## Features

- Secure user authentication using BCrypt hashing.
- Modular creation of multi-page form using flexible react components.
- Data scraping from public wine review site to populate wine database.
- Wine matching algorithm that takes user input and translates it into raw SQL queries.
- Store finding feature, populated by parsing HTML from search engine and finding relevant matches.

### Multi-Page Form

The first user interface of the application is a multi-page form with different routes the user can take to find wine(s) that match their interests.
Modular, component based design allows for fast creation of new form pages, leading to 25 unique form pages the user may navigate through on the site.
The redux store handles the transition between form pages and the subsequent search.

```javascript
const FormPage = (props) => {
  const {
    type,
    category,
    options,
    question,
    defaultOutput,
    canChooseMultiple,
    notesAndOption,
  } = props;

  return (
    <div className="container is-widescreen form-container">
      <div id="question-container">
        <Question question={question}></Question>
      </div>
      <OptionsContainer
        options={options}
        canChooseMultiple={canChooseMultiple}
        type={type}
        category={category}
      ></OptionsContainer>
      <FormNavigation type={type} category={category}></FormNavigation>
      <div id="output-container" className="">
        <Output
          defaultOutput={defaultOutput}
          canChooseMultiple={canChooseMultiple}
          type={type}
          category={category}
          notesAndOption={notesAndOption}
        ></Output>
      </div>
    </div>
  );
};
```

![Alt Text](https://misc0103.s3.us-east-2.amazonaws.com/vinify-form.gif)

### Data Scraping

Because of the lack of reliable and affordable wine APIs, a personal database of 80,000+ wines was constructed.
Using the scrapy and scrapy-splash packages, wine data and details were scraped conscientiously.
To match the specific elements with the desired data, xpath and CSS selectors were used.
Data was collected to CSV's and imported into Amazon RDS database.

```python
    def start_requests(self):
        for url in self.start_urls:
            yield SplashRequest(url, self.parse, args={'wait': 1})

    def parse(self, response):
        # [img.attrib['src'] for img in response.css('img')]

        # name also has year
        name = response.xpath('//*[@id="wine-name"]/text()').get()

        # vintage
        vintage = response.xpath('//*[@id="wine-name"]/a/text()').get()

        # country
        country = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[1]/div/div[1]/a[1]/text()').get()

        ...

        yield {
            'color': color,
            'vintage': vintage,
            "country": country,
            'state_province': state_province,
            'region': region,
            'primary-image': primary_img,
            "name": name.strip(),
            "community_rank": community_rank,
            "description": description,
            "varietal": varietal,
            "winery": winery,
            "pairings": pairings,
            "photos": photos
        }
```

### Wine Matching Algorithm

For most database queries, the SQLAlchemy ORM was sufficient for pulling the relevant information from the database for APIs.
However, the wine matching would potentially require dozens of and / or statements and include relevant terms to the user's
wine preferences. Due to the complicated nature of these requests, various functions were created to handle the user input and translate it to raw SQL statements.

```python
    def wine_notes_sql(notes, notes_are_and):
    if ('any' in notes):
        return ''
    statements = []

    # these arrays provide additional catch-all terms for notes
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

    ...

    for note in notes:
        if (note == 'dark fruit'):
            statements.append(note_matching_terms(dark_fruits))
        elif (note == 'earthy'):
            statements.append(note_matching_terms(earthy_notes))
        elif (note == 'herbaceous'):
            statements.append(note_matching_terms(herbs))
        elif (note == 'bright fruit' or note == 'fruity'):
            statements.append(note_matching_terms(bright_fruits))

        ...


        else:
            statements.append(
                f"lower(description) LIKE lower('%{note}%')")

    sql_formatted = ''
    # This ternary takes into account if the user is querying and or or for notes
    if (notes_are_and):
        sql_formatted = ' AND '.join(statements)
    else:
        sql_formatted = ' OR '.join(statements)

    return f'AND ({sql_formatted})'
```

![Alt Text](https://misc0103.s3.us-east-2.amazonaws.com/vinify-search.gif)

### Store Finding Feature

On each wine page, the user may press the "Find It!" button to return a list of stores and distributors they can purchase this wine from.
The lack of a public API for this led to the approach of using a wine industry search engine to find if each wine was available anywhere in the USA.
Using the BeautifulSoup python package, HTML data was parsed and harvested to create a reliable API for finding wine stores.

```python
    @wine_routes.route('/<id>/find-stores')
def wine_finder(id):
    wine = Wine.query.get(id).to_dict()

    # we have the wine, so now we'll search it with wine finder
    wine_kws = '+'.join(wine['name'].split(' '))

    # we parse an html request for the wine
    url = f'https://www.winefetch.com/websearch_results.html?site=&kw={wine_kws}&year=vintage&size='
    web_url = urllib.request.urlopen(url)
    data = web_url.read()
    soup = BeautifulSoup(data, 'html.parser')

    # grab name
    item_name_arr = soup.select('td.wfc > b')[3:]
    names = [name.get_text() for name in item_name_arr]

    # grab shop name
    shop_name_arr = soup.select('td > a.wf_content_link')[3:]
    shop_names = [shop_name.get_text() for shop_name in shop_name_arr]

    ...

    # make dictionary containing data for each location
    wine_shops = []
    i = 0
    while i < len(shop_names) and i < len(names) and i < len(shop_locations_parsed) and i < len(buy_links_parsed) and i < len(list_prices):
        # A LOT of matches pulled from the site are not good matches,
        # so we check the similarity to verify a good match
        similarity = SequenceMatcher(None, wine['name'], names[i]).ratio()
        if (similarity > 0.5):
            city_state = shop_locations_parsed[i].split(', ')

            wine_shop = {
                'wine_shop': shop_names[i],
                'wine_name': names[i],
                'city': city_state[0],
                'state': city_state[1],
                'buy_link': buy_links_parsed[i],
                'list_price': list_prices[i]
            }
            wine_shops.append(wine_shop)
        i += 1

    # Sort by state name
    def state_name(instance):
        return instance.get('state')
    wine_shops.sort(key=state_name)

    return jsonify(wine_shops)
```

![Alt Text](https://misc0103.s3.us-east-2.amazonaws.com/vinify-store-finder.gif)
