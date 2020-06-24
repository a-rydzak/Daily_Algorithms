def main():
	return merge_sort([1,2,3,4,5,8,9,1,2,3,4,5,6,7,9,10,22,3,33,44])


def merge_sort(data):
	return data

def list_breakdown():
	pass

def merge_two_sorted(a, b):

	i = 0
	j = 0

	new_arr = []

	while i < len(a) and j < len(b):
		if a[i] < b[j]:
			new_arr.append(a[i])
			i += 1
		else:
			new_arr.append(b[j])
			j += 1
	if i < len(a):
		while i < len(a):
			new_arr.append(a[i])
			i += 1
	else:
		while j < len(b):
			new_arr.append(b[j])
			j += 1

	return new_arr

	
if __name__ == '__main__':
	print(merge_two_sorted([1,5,7,12,13],[2,7,10]))
