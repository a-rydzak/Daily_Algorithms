array=[1,2,3,"Jess", -1, 55]
max=0


array.each do |i|
  if i.is_a? Integer
  	if i > max
  		max=i
  	end
  end
end

puts max
