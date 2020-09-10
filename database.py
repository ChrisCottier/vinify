from app.models.users import User
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(name='demo', email='demo@gmail.com',
                hashed_password="$2b$14$9sH0h2RLTrjkmBxMKdmdk.Oj5Lr4aWSuqX.jHxphBkYwdlo4RK8CS")

    db.session.add(demoq)

    db.session.commit()
