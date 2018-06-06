
array=[1,2,3,4,5,6]

def pop_function(array)
	array_2=[]
	x=0
	(0...array.length-1).each do |i|
		array_2[x]=array[i]
		x+=1
	end
	array=array_2
	puts array
end

pop_function(array)


 