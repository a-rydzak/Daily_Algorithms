
array=[12,3,4,5,6,6]


def pop(array, index):
	if index > len(array):
		print("Index out of range")
		return
	array_2=['Nan']*(len(array)-1)
	index_count=0
	for i in range(0, len(array)):
		if i != index:
			array_2[index_count]= array[i]
			index_count+=1
	array=array_2
	print(array)

pop(array, 3)
