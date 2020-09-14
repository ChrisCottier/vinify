from sqlalchemy import create_engine

with open('2019utf8copy.csv', 'r') as f:    
    conn = create_engine('postgresql+psycopg2://wino:dunham4lyfe@aa-capstone.c5x6wy7iyuua.us-east-2.rds.amazonaws.com/wino_app').raw_connection()
    # conn.set_client_encoding('UNICODE')
    cursor = conn.cursor()
    cmd = 'COPY wines(url, wine_type, avg_price, name, vintage, color, verietal, description, primary_image, country, state_province, region, winery, community_rank, pairings, photos) FROM STDIN WITH (FORMAT CSV, HEADER TRUE)'
    cursor.copy_expert(cmd, f)
    conn.commit()