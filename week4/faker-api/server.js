const { faker } = require ('@faker-js/faker');
const express = require('express');
const app = express();
const PORT = 8000;


const createUser = () => ({
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    email : faker.internet.email(this.firstName, this.lastName),
    password : faker.internet.password(),
    phoneNumber : faker.phone.number(),
    id : faker.database.mongodbObjectId()
    });

console.log(createUser);
  
  const createCompany = () => ({
    id: faker.database.mongodbObjectId(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  });
  
  app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
  });
  
  app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
  });
  
  app.get("/api/user/company", (req, res) => {
   const createBoth = ({ 
        user : createUser(), 
        company : createCompany(),
    });
    res.json({createBoth});
  });

console.log(createUser)

app.listen(PORT, () => {
    console.log('Server is connected')
})