def main():
    return insertion_sort([4,5,6,1,2,7,8,10])


def insertion_sort(data): 

    for i in range(1,len(data)):

        current = data[i]

        while i>0 and data[i-1]>current:
            data[i] = data[i-1]
            i = i-1
            data[i] = current
            print(data)


    return data

if __name__ == '__main__':
    print(main())

