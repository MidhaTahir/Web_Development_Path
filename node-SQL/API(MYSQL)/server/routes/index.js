const express = require("express");
const db = require("../db");
const router = express.Router();

let users = []
// let newUser = [21,'Faree','Ehtesham','fareena@gmail.com','hsjaj','F'] 
//`id`, `fname`, `lname`, `email`, `pwd`, `gender`

router.get("/adduser", async (req, res, next) => {
  try {
    res.json('hello hashy');
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// router.get("/:id", async (req, res, next) => {
//   try {
//     let results = await db.one(req.params.id);
//     res.json(results);
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });

// http://localhost:5000/adduser/
router.post("/adduser", async (req, res, next) => {
  try {
    console.log(req)
    let newUser = req.body.newUser;
    console.log({newUser})
    users.push(newUser)
    let results = await db.one(newUser);
    // res.setHeaders("Content-Type", "application/json");
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
