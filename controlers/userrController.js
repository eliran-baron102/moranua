const con = require('../utils/database');

exports.updateCounter = async (req, res, next) => {
	let counter = req.query.counter;
	counter++;
	let result = await CountAllUsers( counter);
	res.send(result);
};

exports.getCounter = async (req, res, next) => {
	let result = await getAllCounter();
	res.send(result);
};

CountAllUsers = async (counter) => {
	try {
		let AllUsers = await con.execute(`UPDATE countusers SET users='${counter}' WHERE countusers.id = 1`);
		return AllUsers[0];
	} catch (err) {
		return err.message;
	}
};

getAllCounter = async () => {
	try {
		let AllUsers = await con.execute(`SELECT * FROM countusers`);
		return AllUsers[0];
	} catch (err) {
		return err.message;
	}
};
// 	let pr = await con.execute(
// 		`UPDATE users SET name='${NameInput}',description ='${DescriptionInput}', Photo = '${Urlinput}', Price = '${PriceInput}', country = '${CountryInput}', Start_date = '${StartDateinput}', End_date = '${EndDateInput}' WHERE vication.id = ${Id}`
// 	);
// 	res.send(pr[0]);
// });
