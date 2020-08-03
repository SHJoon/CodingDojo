# # Function to do insertion sort 
# def insertionSort(arr): 
  
#     # Traverse through 1 to len(arr) 
#     for i in range(1, len(arr)): 
  
#         key = arr[i] 
  
#         # Move elements of arr[0..i-1], that are 
#         # greater than key, to one position ahead 
#         # of their current position 
#         j = i-1
#         while j >= 0 and key < arr[j] : 
#                 arr[j + 1] = arr[j] 
#                 j -= 1
#         arr[j + 1] = key 
  
  
# # Driver code to test above 
# arr = [12, 11, 13, 5, 6] 
# insertionSort(arr) 
# for i in range(len(arr)): 
#     print ("% d" % arr[i]) 
  
# This code is contributed by Mohit Kumra 

def insertion_sort(lst):
    for i in range(1, len(lst)):
        current_element = lst[i]
        compare_index = i - 1

        while compare_index >= 0 and current_element < lst[compare_index]:
            lst[compare_index + 1] = lst[compare_index]
            compare_index -= 1
        lst[compare_index + 1] = current_element

my_list = [12, 11, 13, 5, 6] 
insertion_sort(my_list) 
print(my_list)