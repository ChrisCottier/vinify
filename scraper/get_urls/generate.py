year_2020 = []
for i in range(192):
    year_2020.append(
f'http://www.snooth.com/wines/#action=search&hide_state=2&search_page={i+1}&vintage=2018&country=US&entity=wine&store_front=0&title_only=1')
f = open("year_arrays.py", "a")
f.write(f'{year_2020}')
f.close()