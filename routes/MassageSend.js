const express = require('express');
const NewVacation = express.Router();
const con = require('../utils/database');
const bcrypt = require('bcryptjs');
let saltRounds = 10;
let counter = 0;
NewVacation.get('/sendmassege', async (req, res) => {
	console.log('Req : ', req);
	let NameInput = req.query.name;
	let MassegeInput = req.query.massage;
	let MailInput = req.query.mail;
	let PhoneInput = req.query.phone;
	let addDataResult = await InsertData(NameInput, MassegeInput, MailInput, PhoneInput);
	res.send(addDataResult);
});
// NewVacation.get('/favorits', async (req, res) => {
// 	console.log('Req : ', req);
// 	let follow = req.query.follow;
// 	let id = req.query.id;
// 	counter++;
// 	if (counter > 1) {
// 		counter = 0;
// 	}
// 	let pr = await con.execute(`UPDATE vication SET follow='${counter}' WHERE id='${id}'`);
// 	res.send(pr[0]);
// });
InsertData = async (NameInput, MassegeInput, MailInput, PhoneInput) => {
	try {
		let data = await con.execute(
			`INSERT INTO users (name,massage,mail,phone) VALUES ('${NameInput}','${MassegeInput}','${MailInput}','${PhoneInput}')`
		);
		return data[0];
	} catch (err) {
		return err.message;
	}
};
// const newLocal = '/DeleteData';
// NewVacation.get('/DeleteData', async (req, res) => {
// 	console.log('Req : ', req);
// 	let id = req.query.id;
// 	let Card = await DeleteData(id);
// 	res.send(Card);
// });

// DeleteData = async (id) => {
// 	try {
// 		let pr = await con.execute(`DELETE FROM vication WHERE id = ${id}`);
// 		return pr[0];
// 	} catch (err) {
// 		return err.message;
// 	}
// };

// NewVacation.get('/UpdateData', async (req, res) => {
// 	console.log('Req : ', req);
// 	let Id = req.query.id;
// 	let NameInput = req.query.name;
// 	let CountryInput = req.query.massage;
// 	let DescriptionInput = req.query.mail;
// 	let PriceInput = req.query.phone;

// 	let pr = await con.execute(
// 		`UPDATE users SET name='${NameInput}',description ='${DescriptionInput}', Photo = '${Urlinput}', Price = '${PriceInput}', country = '${CountryInput}', Start_date = '${StartDateinput}', End_date = '${EndDateInput}' WHERE vication.id = ${Id}`
// 	);
// 	res.send(pr[0]);
// });
module.exports = NewVacation;
