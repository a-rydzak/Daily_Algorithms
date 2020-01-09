'''
    Python Algos
'''

def power(base, to):
    if to == 0:
        return 1
    return base * power(base, to-1)




# print(power(2,0))

(lambda x: print(x))('Andrew Loves Python')

obj = {'Andrew':2222}

for x,y in enumerate(obj):
    print(x,y)