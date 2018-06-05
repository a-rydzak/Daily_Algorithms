array=[1,2,3,"Jess", -1, 55]
sum=0
arr_length=0


array.each do |i|
  if i.is_a? Integer
  	sum+=i
  	arr_length+=1
  end
end
avg=sum/arr_length
puts avg

