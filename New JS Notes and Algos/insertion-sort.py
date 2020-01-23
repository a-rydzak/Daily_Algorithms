def main():
    return insertion_sort([9,8,7,6,5,4,12,2,1])

def insertion_sort(data):

    steps = len(data)

    for step in range(1,steps):
        
        current_val = data[step]

        while step > 0 and current_val < data[step-1]:

            data[step-1], data[step] = current_val, data[step-1]
            step-=1

    return data


if __name__ == '__main__':
    print(main())