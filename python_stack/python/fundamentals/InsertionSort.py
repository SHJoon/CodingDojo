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