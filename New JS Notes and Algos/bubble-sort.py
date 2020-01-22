def main():

    data = [10,9,8,7,6,5,4,3,2,1,0]
    data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10]
    return bubbleSort(data)


def bubbleSort(data):

    data_len = len(data)

    for i in range(0,len(data)-1):

        for j in range(0,data_len - 1 - i):

            if data[j] > data[j+1]:

                data[j], data[j+1]  = data[j+1], data[j]
                
    return data


if __name__ == "__main__":
    print(main())