const express = require('express');
const router = express.Router();
const con = require('../utils/database');
const UserController = require('../controlers/userrController');

router.get('/async', UserController.checkUser);

router.get('updateCounter', UserController.updateCounter);

router.get('getCounter', UserController.getCounter)

module.exports = router;

// exports.checkUser = async (req, res, next) => {
//   mail = req.query.mail
//   password = req.query.password
//   checkMail = await userCheck(mail, password)
//   res.send(checkMail)
// }

// userCheck = async (mail, password) => {
//   try {
//       let user = await con.execute(`SELECT * FROM users WHERE mail LIKE '${mail}' AND password LIKE '${password}'`)
//       return user[0]
//   } catch (err) {
//       return err.message;
//   }
// }
