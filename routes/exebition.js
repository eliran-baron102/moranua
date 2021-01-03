const express = require('express');
const router = express.Router();
const con = require('../utils/database');
router.get('/ShowAllexeb', async (req, res, next) => {
	let result = await ShowAllexeb();

	// for (let i = 0; i < result.length; i++) {
	//   result[i].follow = false;
	// }
	res.send(result);
});
Allexeb = [];
ShowAllexeb = async () => {
	try {
		let Allexeb = await con.execute(`SELECT * FROM exebition`);
		return Allexeb[0];
	} catch (err) {
		return err.message;
	}
};
module.exports = router;
