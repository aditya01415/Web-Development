const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Aditya@103',
});
let q = "INSERT INTO users (id, username, email, password) VALUES ?";  
let users = [
["123","123_newuser","abc@gmail.com","abc"],
["124","124_newuser","def@gmail.com","def"]
];
try {
  connection.query(q, [users], (error, results) => {
    if(error) throw error;
        console.log(results);
        console.log(results.length);
        console.log(results[0]);
        console.log(results[1]);
    });
} catch (error) {
    console.error('Error connecting to the database:', error);
  }
  connection.end();
let getRandomUser = () => {
  return[
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password()
  ];
};
console.log(getRandomUser());