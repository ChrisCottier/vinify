import scrapy
import pathlib
from scrapy_splash import SplashRequest
wines_2013 = [


]

# http://www.snooth.com/wines/#action=search&hide_state=2&vintage=2019&country=US&entity=wine&store_front=0&title_only=1
# http://www.snooth.com/wines/#action=search&hide_state=2&search_page=2&vintage=2019&country=US&entity=wine&store_front=0&title_only=1
# http://www.snooth.com/wines/#action=search&hide_state=2&search_page=3&vintage=2019&country=US&entity=wine&store_front=0&title_only=1
# http://www.snooth.com/wines/#action=search&hide_state=2&search_page=45&vintage=2019&country=US&entity=wine&store_front=0&title_only=1
# search page


class WinesSpider(scrapy.Spider):
    name = 'wines'
    start_urls = wines_2013
    custom_settings = {
        'AUTOTHROTTLE_ENABLED': True,
        'AUTOTHROTTLE_TARGET_CONCURRENCY': 1,
        'AUTOTHROTTLE_DEBUG': True,
        'FEEDS': {
            'wine-details-2013.csv': {
                'format': 'csv'
            }
        },
        'FEED_EXPORT_FIELDS': ["name", 'vintage', "color", "verietal", "description", "primary-image",  "country",  'state_province', 'region', "winery", "community_rank",  "pairings", "photos"],
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

        # 'DOWNLOADER_MIDDLEWARES': {'scraper.middlewares.JSDownload': 500}

    }

    def start_requests(self):
        for url in self.start_urls:
            yield SplashRequest(url, self.parse, args={'wait': 1})

    def parse(self, response):
        # [img.attrib['src'] for img in response.css('img')]

        # name also has year???
        name = response.xpath('//*[@id="wine-name"]/text()').get()

        # vintage
        vintage = response.xpath('//*[@id="wine-name"]/a/text()').get()

        # country
        country = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[1]/div/div[1]/a[1]/text()').get()

        # state/province
        state_province = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[1]/div/div[1]/a[2]/text()').get()

        # region
        region = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[1]/div/div[1]/a[3]/text()'
        ).get()

        # rank/snoothrank
        community_rank = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[2]/div[1]/div/@title').get()

        # wine description
        description = response.xpath(
            '//div[@id="winemakernotes"]/p/text()').get()

        # verietal
        verietal = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[1]/div/div[5]/a/text()').get()

        # productId

        # winery
        winery = response.xpath(
            '//*[@id="wpp2014"]/div[1]/div/div[2]/div[1]/div/div[3]/a[1]/text()').get()

        # food pairing
        pairings = response.xpath('//img[@class="mos-img"]/@alt').getall()

        # photos
        photos = response.xpath(
            '//*[@id="paginate-able-photos"]/div/div/ul/li/a/img/@src').getall()

        # long/lat

        # color
        color = response.xpath(
            '//a[contains(@href,"http://www.snooth.com/wines/?color=")]/text()').get()

        # main image
        primary_img = response.css('#wine-image-top::attr(src)').get()

        # move all found to csv

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
            "verietal": verietal,
            "winery": winery,
            "pairings": pairings,
            "photos": photos
        }
