def selection_sort(lst):
    for i in range(len(lst)):
        min_num_idx = i
        for j in range(min_num_idx, len(lst)):
            if lst[min_num_idx] > lst[j]:
                min_num_idx = j
        
        temp = lst[min_num_idx]
        lst[min_num_idx] = lst[i]
        lst[i] = temp

my_list = [51,2,1,9,7,6,21,-5]
selection_sort(my_list)
print(my_list)
