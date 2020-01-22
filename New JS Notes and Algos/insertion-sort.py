def main():
    return insertion_sort([4,5,6,1,2,7,8,10])


def insertion_sort(data): 
  
   for i in range(1,len(data)):

       #element to be compared
       current = data[i]

       #comparing the current element with the sorted portion and swapping
       while i>0 and data[i-1]>current:
           data[i] = data[i-1]
           i = i-1
           data[i] = current


   return data

if __name__ == '__main__':
    print(main())