	arr =[1,2,3,4,5,6]

	arr.each do |int|
		puts int
	end

puts #-------------------------------------------

	arr =[1,2,3,4,5,6]
	for i in 0..arr.length-1
		puts arr[i]
	end

puts #-------------------------------------------

	3.times {puts "Oh hi Mark"}

puts #--------------------------------------------Identify a class

	puts "Hey".class
	puts 24.class    
	puts true.class  
	puts nil.class  

puts #-------------------------------------------Cool Methods

	puts "string".reverse 
	puts 23.odd?          
	puts "abc".upcase
	puts "".empty?      

puts #-------------------------------------------Simply adding and Maths

	24.send(:+, 8)  # => 32
	24.+ (8)        # => 32
	24 + 8     

puts #-------------------------------------------The thing about strings

	string1= "hey hey hey"

	string2 = String.new("I am an instance of the String class")

	puts string1
	puts string2

puts #-------------------------------------------string concat in ruby

	puts "24 plus 8 is #{24 + 8}" 

puts #-------------------------------------------Split method

	puts "hello".split                
	puts "hello".split("")             #
	puts "oscar@gmail.com".split("@")

puts #-------------------------------------------

	str = "bar"
	str[0] = "c"
	puts str # => "car"

puts #-------------------------------------------Capitalize is not upcase

	word = "Koshka"
	word.capitalize 
	puts word 
	word.capitalize! 
	puts word

puts #-------------------------------------------Unless
	age = 19

	unless age < 21
	  puts "Welcome to the party"
	else
	  puts "Not yet"
	end

puts #------------------------------------------- while with a break statement

	i = 0
	num = 5
	while i < num do
	  puts "Inside the loop i = #{i}"
	  i += 1  
	  break if i == 2  
	end

puts #-------------------------------------------Skip with next if

	for i in 0..5 
	  next if i == 2
	  puts "Value of local variable is #{i}"   
	end

puts #-------------------------------------------Method Creation

	def say_hello name1, name2
	  puts "hello, #{name1} and #{name2}"
	end
	say_hello "oscar", "eduardo" 

#vs----

	def say_hello(name1, name2)
	  puts "hello, #{name1} and #{name2}"
	end
	say_hello("oscar", "eduardo")

puts #-------------------------------------------Array Methods	

str="Oh hi Mark."
# .at or .fetch
	# puts arr.fetch(1)
	# puts arr.at(1)
# .delete
puts str
puts str.delete("ohM")

# .reverse
puts str.reverse
# .length
puts str.length
# .sort
arr=["andrew", "caleb", "bronco"]
puts arr.sort
# .slice

# .shuffle
puts arr.shuffle
# .join
# .insert
# values_at()

puts #-------------------------------------------Iterators

arr=['andrew', 'nicholas', 'rydzak']

arr.each do |x|
	puts "#{x} is a no good foot flopper."
end


words = ["ant", "bear", "cat"]
puts words.any? {  |word| word.length >= 3 } #----------------Useful for finding a specific email or term 

puts (1..4).collect { |i| i*i }

puts (1..100).detect { |i| i %5 == 0 and i % 7 == 0 } 

puts (1..10).find_all { |i| i % 3 == 0 }

(1..10).reject { |i| i % 3 == 0 } 

5.upto(10) { |i| print i, " " } 


puts #-------------------------------------------Yield

def test 
  yield 5 
  puts "You are in the method test" 
  yield 100 
end 
test { |i| puts "You are in the block #{i}" }