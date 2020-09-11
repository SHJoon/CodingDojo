const express = require("express");
const faker = require("faker");
const app = express();

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.address = {
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
});


const server = app.listen(8000, () =>
    console.log(`Server initialized on port ${server.address().port}.`)
);