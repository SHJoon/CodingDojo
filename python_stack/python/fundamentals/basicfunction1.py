#1
def a():
    return 5
print(a())

# Prediction: 5
# Outcome: 5


#2
def a():
    return 5
print(a()+a())

# Prediction: 10
# Outcome: 10


#3
def a():
    return 5
    return 10
print(a())

# Prediction: 5
# Outcome: 5


#4
def a():
    return 5
    print(10)
print(a())

# Prediction: 5
# Outcome: 5


#5
def a():
    print(5)
x = a()
print(x)

# Prediction: 5
# Outcome: 5


#6
def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))

# Prediction: 3,5,error (since the function doesn't return any value)
# Outcome: 3,5,error


#7
def a(b,c):
    return str(b)+str(c)
print(a(2,5))

# Prediction: "25"
# Outcome: "25"


#8
def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())

# Prediction: 100,10
# Outcome: 100,10


#10
def a(b,c):
    return b+c
    return 10
print(a(3,5))

# Prediction: 8
# Outcome: 8


#11
b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)

# Prediction: 500,500,300,500
# Outcome: 500,500,300,500


#12
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)

# Prediction: 500,500,300,500
# Outcome: 500,500,300,500


#13
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)

# Prediction: 500,500,300,300
# Outcome: 500,500,300,300


#14
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()

# Prediction: 1,3,2
# Outcome: 1,3,2


#15
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)

# Prediction: 1,3,5,10
# Outcome: 1,3,5,10
