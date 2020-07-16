const mysql = require("mysql");

const pool = mysql.createPool({
  //manage a list of connections
  connectionLimit: 30,
  host: "localhost",
  user: "root",
  password: "0307seematahir",
  database: "kodersgang",
  port: "3306",
});

let usersdb = {};

// usersdb.all = () => {
//   //mysql it callback after query so we want to return promise everytime
//   return new Promise((resolve, reject) => {
//     pool.query(`SELECT * FROM users LIMIT 20`, (err, results) => {
//       if (err) return reject(err);
//       else return resolve(results);
//     });
//   });
// };

// usersdb.one = (id) => {
//   return new Promise((resolve, reject) => {
//     pool.query(
//       // ? prevents sql injection
//       `SELECT * FROM users WHERE id = ?`,
//       [id],
//       (err, results) => {
//         if (err) return reject(err);
//         else return resolve(results[0]);
//       }
//     );
//   });
// };


usersdb.one = (data) => {
    return new Promise((resolve, reject) => {
      data = [Object.values(data)]
      console.log(data)
      pool.query(
        "INSERT INTO users (fname, lname, email, pwd, gender) VALUES ?",
        [data],
        (err, results) => {
          if (err) return reject(err);
          else return resolve(results);
      }
    );
  });
};
  
module.exports = usersdb;
