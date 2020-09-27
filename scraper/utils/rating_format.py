
f = open("ratings.txt", "a")
for rating in ratings:
    new_rating = '\n'
    if (not rating == 'Not rated yet'):
        i = 0
        while i < len(rating) and rating[i] in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']:
            new_rating += rating[i]
            i += 1
    f.write(new_rating)
f.close()
