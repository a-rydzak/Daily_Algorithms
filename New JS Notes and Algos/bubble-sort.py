def main():

    data = [10,9,8,7,6,5,4,3,2,1,0]
    data = [100,9, 8, 7, 11, 6, 5, 4, 3, 2, 1, 0, 10]
    return bubbleSort(data)


def bubbleSort(data):

    steps = len(data) -1 

    for i in range(steps):

        swp_occured = False # This is the optimization part

        for j in range(steps):
    
            if data[j] > data[j+1]:

                data[j], data[j+1]  = data[j+1], data[j]
                swp_occured = True

        if swp_occured == False:
            # if array had already been sorted with no swaps  not needed
            return data
              


if __name__ == "__main__":
    print(main())