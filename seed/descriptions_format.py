
f = open("descriptions.txt", "a")
for description in descriptions:
    new_rating = f'{description} \n'
    if (len(new_rating) > 2600):
        new_rating = new_rating[:2600] + '\n'
    f.write(new_rating)
f.close()
