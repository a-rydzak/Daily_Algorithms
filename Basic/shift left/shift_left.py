
array=[12,3,4,5,6,6]


def shift_left(array, times):
	while times !=0:
		temp=array[0]
		array_2=['empty']*len(array)
		for i in range(1, len(array)):
			array_2[i-1]=array[i]
		array_2[len(array_2)-1]=temp
		array=array_2
		times+=-1
	print(array_2)

shift_left(array, 6)