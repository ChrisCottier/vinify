# f'http://www.snooth.com/wines/#action=search&search_page={i+1}&vintage=2015&color[0]=1')
year_2013_red = []
for i in range(1000):
    year_2013_red.append(
        f'http://www.snooth.com/wines/#action=search&search_page={i+1}&vintage=2013&color[0]=0')

f = open("year_arrays.py", "a")
f.write(f'year_2013_red = {year_2013_red}')
f.close()
