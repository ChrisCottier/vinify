from app.models.users import User
from app.models.wines import Wine
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(name='demo', email='demo@gmail.com',
                hashed_password="$2b$14$9sH0h2RLTrjkmBxMKdmdk.Oj5Lr4aWSuqX.jHxphBkYwdlo4RK8CS")
    
    wine = Wine(

      name='Rosé Win',
      description='The estate was founded by the Meyer family circa 1870, and was known as Weingut A. Meyer for four generations. In 1950 through marriage of a Meyer daughter and Willibald Nakel (who also came from a wine making family) the estate became known as Weingut Meyer-Nakel. After completing his university studies Werner Nakel first taught mathematics and coached sports. In 1983 Werner took over the estate and with the 1987 vintage won top honors for the best Pinot Noir in Germany according to the German language publication Vinum. This was repeated in 1994 and 1995. Since 1987 the estate has been continuously listed as one of the top 100 wineries in Germany by DM magazine. The estate joined the V.D.P. in 1993 and in 1996 Feinschmecker nominated Werner Nakel as a candidate for vintner of the year. In the 1997 Gault Millau guide, the ‘94 Meyer-Nakel ”S” Pinot Noir was voted the best red wine in Germany. The estate consists of 21 acres and produces approximately 5800 cases ever year. The top vineyard sites include Pfarrwingert in Dernau, the Sonnenberg in Neuenahr, and the Riegelfeld and Ursulinengarten in Ahrweiler. The soil is made up primarily of weathered slate with some loamy loess. The vineyards are planted 73% to Pinot Noir, 12% to Fruhburgunder, 10% to Dornfelder and 5% to Riesling. Average yield is about 60 hl\ha.',
        verietal='Mourvèdre'
    
    )

    db.session.add(demo)
    db.session.add(wine)

    db.session.commit()
