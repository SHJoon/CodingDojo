var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

// How would you print/log John's age?
console.log(users[1].age);

// How would you print/log the name of the first object?
console.log(user[0].age);

// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
for (var i = 0; i < users.length; i++) {
  name = users[i].name;
  age = users[i].age;
  console.log(name + " - " + age);
}
