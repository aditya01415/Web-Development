const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Aditya1415',
});
let getRandomUser = () => {
  return[
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password()
  ];
};
console.log(getRandomUser());

app.get('/', (req, res) => {
  let q = `SELECT COUNT(*) AS cnt FROM users`;
  connection.query(q, (error, results) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return res.status(500).send('Error connecting to the database');
    }
    let count = results[0].cnt;
    res.render('home.ejs', { count });
  });
});

  app.get('/user', (req, res) => {
  let q = `SELECT * FROM users`;
  connection.query(q, (error, results) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return res.status(500).send('Error connecting to the database');
    }
    res.render('user.ejs', { users: results });
  });
});

app.get("/user/:id/edit", (req, res) => {
  let id = req.params.id;
  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (error, results) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return res.status(500).send('Error connecting to the database');
    }
    let user = results[0];
    res.render("edit.ejs", { user });
  });
});
app.patch("/user/:id/edit", (req, res) => {
  let id = req.params.id;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM users WHERE id = ?`;

  connection.query(q, [id], (error, results) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return res.status(500).send('Error connecting to the database');
    }

    let user = results[0];

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (formPass !== user.password) {
      return res.send('Incorrect password');
    }

    let updateQuery = `UPDATE users SET username = ? WHERE id = ?`;
    connection.query(updateQuery, [newUsername, id], (updateError) => {
      if (updateError) {
        console.error('Error connecting to the database:', updateError);
        return res.status(500).send('Error connecting to the database');
      }
      res.redirect('/user');
    });
  });
});

  app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });

