from . import db, func
from sqlalchemy import Index


class Wine(db.Model):
    __tablename__ = 'wines'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(200))
    wine_type = db.Column(db.String(200))
    avg_price = db.Column(db.Integer)
    name = db.Column(db.String(200))
    vintage = db.Column(db.Integer)
    color = db.Column(db.String(20))
    verietal = db.Column(db.String(200))
    description = db.Column(db.Text)
    primary_image = db.Column(db.String(200))
    country = db.Column(db.String(100))
    state_province = db.Column(db.String(80))
    region = db.Column(db.String(80))
    winery = db.Column(db.String(80))
    community_rank = db.Column(db.DECIMAL(10, 2))
    pairings = db.Column(db.String(1000))
    photos = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "url": self.url,
            "name": self.name,
            "wine_type": self.wine_type,
            "avg_price": self.avg_price,
            "vintage": self.vintage,
            "color": self.color,
            "verietal": self.verital,
            "description": self.description,
            "primary_image": self.primary_image,
            "country": self.country,
            "state_province": self.state_province,
            "region": self.region,
            "winery": self.winery,
            "community_rank": str(self.community_rank),
            "parings": self.pairings,
            "photos": self.photos,
            "created_at": self.created_at,
            "update_at": self.update_at
        }


db.Index('wine_indeces', Wine.wine_type, Wine.avg_price, Wine.name, Wine.color,
         Wine.verietal, Wine.country, Wine.community_rank, Wine.pairings)
