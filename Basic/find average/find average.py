array=[1,2,3,"Jess", -1, 55]
sum=0
end=len(array)
arr_length=0

for i in range(0, end):
	if type(array[i]) == int:
		arr_length+=1
		sum+= array[i]

sum=sum/arr_length
print(sum)