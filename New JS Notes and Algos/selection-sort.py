def main():

    return selection_sort([1, 4, 3, 2, 5])

#  far worse than bubble sort,only better for minimizing the number of swaps needed
#  bubble sort swaps a lot.  In case of memory use needs to be less
def selection_sort(data):

    
    data_len = len(data)-1
    smallest_index = 0

    for j in range(data_len):
        
        smallest_val = data[j]

        for i in range(j,data_len):

            if data[i+1] < smallest_val:
                smallest_val = data[i+1]
                smallest_index = i+1

        data[j], data[smallest_index] = smallest_val, data[j]

    return data


if __name__ == '__main__':
    print(main())