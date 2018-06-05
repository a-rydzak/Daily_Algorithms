array=[1,2,3,"Jess", -1, 55]
max=0
end=len(array)

for i in range(0, end):
	if type(array[i]) == int:
		if array[i]>max:
			max=array[i]

print(max)