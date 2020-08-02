# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Howard!" with the name in a variable
name = "Howard"
print("Hello", name, "!")	# with a comma
print("Hello " + name + "!")	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 7
print("Hello", name)	# with a comma
print("Hello " + str(name))	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "pasta"
fave_food2 = "fried chicken"
print("I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}") # with an f string


# Returns lower case version of the string
needsToBeLower = "ARanDOMWOrD"
print(needsToBeLower.lower())

# Splits a string with given parameter, and puts them in a list
separateWord = "This,is,a,sentence"
print(separateWord.split(","))

# Checks if a string only contains alphabet letters, and returns a boolean
alphaWord1 = "IsThisAlpha?"
alphaWord2 = "HowAboutThis123"
alphaWord3 = "ThisShouldBeTrue"
print(alphaWord1.isalpha())
print(alphaWord2.isalpha())
print(alphaWord3.isalpha())