from . import db, func

class Wine(db.Model):
  __tablename__ = 'wines'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40))
  wine_type= db.Column(db.String(40))
  avg_price = db.Column(db.Integer)
  vintage = db.Column(db.Integer)
  color = db.Column(db.String(20))
  verietal = db.Column(db.String(50))
  description = db.Column(db.String(2000))
  primary_image = db.Column(db.String(200))
  country = db.Column(db.String(50))
  state_province = db.Column(db.String(80))
  region = db.Column(db.String(80))
  winery = db.Column(db.String(80))
  community_rank = db.Column(db.String(50))
  pairings = db.Column(db.String(1000))
  photos = db.Column(db.String(2000))
  created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
  update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "url": self.url,
      "wine_type": self.wine_type,
      "avg_price": self.avg_price,
      "vintage": self.vintage,
      "color": self.color,
      "verietal": self.verital,
      "description": self.description,
      "primary_image":self.primary_image,
      "country": self.country,
      "state_province": self.state_province,
      "region": self.region,
      "winery": self.winery,
      "community_rank": self.community_rank,
      "parings": self.pairings,
      "photos": self.photos,
      "created_at": self.created_at,
      "update_at": self.update_at
    }
