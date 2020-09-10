from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models.users import User

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(name = 'Ian', email = 'ian@aa.io', hashed_password="asfhauifhuioaerghi")
  javier = User(name = 'Javier', email = 'javier@aa.io', hashed_password="asfhauifhuioaerghi")
  dean = User(name = 'Dean', email = 'dean@aa.io', hashed_password="asfhauifhuioaerghi")
  angela = User(name = 'Angela', email = 'angela@aa.io', hashed_password="asfhauifhuioaerghi")
  soonmi = User(name = 'Soon-Mi', email = 'soonmi@aa.io', hashed_password="asfhauifhuioaerghi")
  alissa = User(name = 'Alissa', email = 'alissa@aa.io', hashed_password="asfhauifhuioaerghi")

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)

  db.session.commit()
