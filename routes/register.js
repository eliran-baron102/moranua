const express = require("express");
const users = express.Router();
const con = require("../utils/database");
const bcrypt = require("bcryptjs");
let saltRounds = 10;
users.get("/InstUsers", async (req, res) => {
  console.log("Req : ", req);
  let fname = req.query.Fname;
  let lname = req.query.Lname;
  let email = req.query.email;
  let phone = req.query.phone;
  let password = req.query.password;
  let addUserResult = await InsertUser(fname, lname, email, phone, password);
  res.send(addUserResult);

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (!err) {
      console.log(hash);
    } else {
      console.log("Error", err);
    }
  });
});
InsertUser = async (fname, lname, e, phone, pass) => {
  try {
    let ur = await con.execute(
      `INSERT INTO users (First_Name,Last_Name,mail,Phone,Password) VALUES ('${fname}', '${lname}', '${e}', '${phone}', '${pass}')`
    );
    return ur[0];
  } catch (err) {
    return err.message;
  }
};

module.exports = users;
