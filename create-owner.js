const bcrypt = require('bcrypt');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

bcrypt.hash('4321', 10).then(hash => {
  pool.query(
    'INSERT INTO users (nom, prenom, username, mot_de_passe, role) VALUES ($1,$2,$3,$4,$5)',
     ['Bouali', 'Dhiaa eddine', 'yamii3@gmail.com', hash, 'owner']
  ).then(() => {
    console.log('✅ Owner created!');
    pool.end();
  }).catch(err => {
    console.error('Error:', err.message);
    pool.end();
  });
});