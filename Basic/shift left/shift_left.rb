
array=[1,2,3,4,5,6]

def shift_left(array, times)
	while times !=0
		array_2=[]
		temp=array[0]
		(1..array.length).each do |i|
			array_2[i-1]=array[i]
		end
		array_2[array_2.length-1]=temp
		array=array_2
		times+=-1
	end
	puts array
end

shift_left(array,3)





 