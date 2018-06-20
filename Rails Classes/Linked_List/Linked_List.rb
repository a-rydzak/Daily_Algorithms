class Node
	attr_reader :next :value
	def initialize(value)
		@next=null
		@value=value
	end
end


class LinkedList
	attr_reader :head :length
	def initialize()
		@head=null
		@length=0
	end

	def add(val)
		new_node=Node.new(val)
		current_node=self.head
		puts @current_node
	end
end

