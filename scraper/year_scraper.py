import scrapy
import pathlib
from scrapy_splash import SplashRequest

year_2013_red = []


class WinesSpider(scrapy.Spider):
    name = 'wines'
    start_urls = year_2013_red
    custom_settings = {
        'AUTOTHROTTLE_ENABLED': True,
        'AUTOTHROTTLE_TARGET_CONCURRENCY': 4,
        'AUTOTHROTTLE_DEBUG': True,
        'FEEDS': {
            '2013-wines.csv': {
                'format': 'csv'
            }
        },
        'FEED_EXPORT_FIELDS': ["url", "wine_type", "avg_price"],
        'FEED_EXPORT_ENCODING': 'utf8',
        'SPLASH_URL': 'http://127.0.0.1:8050',
        'DOWNLOADER_MIDDLEWARES': {
            'scrapy_splash.SplashCookiesMiddleware': 723,
            'scrapy_splash.SplashMiddleware': 725,
            'scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware': 810,
        },
        'SPIDER_MIDDLEWARES': {
            'scrapy_splash.SplashDeduplicateArgsMiddleware': 100,
        },
        'DUPEFILTER_CLASS': 'scrapy_splash.SplashAwareDupeFilter',
        'HTTPCACHE_STORAGE': 'scrapy_splash.SplashAwareFSCacheStorage'
    }

    def start_requests(self):
        for url in self.start_urls:
            yield SplashRequest(url, self.parse, args={'wait': 1})

    def parse(self, response):
        # [img.attrib['src'] for img in response.css('img')]

        # price/range
        # GRAB FROM MAIN PAGE
        # avg_price = response.xpath(
        #     '//*[@id="wine-search"]/div[3]/div/div[3]/div[15]/div[2]/div[3]/div/a/span/span/text()').get()
        wines = response.xpath('//div[contains(@class, "item")]')
        wines.getall()

        for index, wine in enumerate(wines):
            # avg_price = wine.xpath(
            #     '//a[contains(@class, "buybutton")]/span/span/text()').get()

            # url = wine.xpath(
            #     '//div[contains(@class, "wine-name")]/a/@href').get()
            avg_price = wine.css('a.buybutton > span > span::text').get()
            url = wine.css('div.wine-name a').attrib['href']
            wine_details = wine.css('div.wine-details').get()
            wine_details_string = str(wine_details)

            wine_type = None
            if 'Type:' in wine_details_string:
                index = wine_details_string.index('Type')
                start_index_type = index + 51
                wine_type = wine_details_string[start_index_type:start_index_type+8]

            yield {
                'url': url,
                'wine_type': wine_type,
                'avg_price': avg_price
            }
