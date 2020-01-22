def main():

    data = [10,9,8,7,6,5,4,3,2,1,0]
    data = [9, 8, 7, 11, 6, 5, 4, 3, 2, 1, 0, 10]
    return bubbleSort(data)


def bubbleSort(data):

    steps = len(data) -1 

    for i in range(steps):

        count = 0 # This is the optimization part

        for j in range(steps):
    
            if data[j] > data[j+1]:

                data[j], data[j+1]  = data[j+1], data[j]
                count += 1

        if count == 0:
            # if array had already been sorted with no swaps  not needed
            return data
              


if __name__ == "__main__":
    print(main())