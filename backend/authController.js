const db = require('./db')
class authContoller {
	async registration(req, res) {
		const { ...user } = req.body
		const result = await db.pool.query(
			'insert into users (name, lastname, nickname, password) values (?, ?, ?, ?)',
			[user.name, user.lastname, user.nickname, user.password]
		)
		console.log(result)
		res.send('date is successfully send')
	}
	async login(req, res) {
		try {
			const { ...user } = req.body
			console.log(user)
			const result = await db.pool.query(
				'select nickname, password from users where nickname=? AND password=?',
				[user.nickname, user.password]
			)
			console.log(result)
			res.send(result)
		} catch (error) {
			res.send(error)
		}
	}
	async getUsers(req, res) {
		try {
			console.log('func')
			const result = await db.pool.query('select * from users')
			res.json(result)
		} catch (error) {}
	}
}

module.exports = new authContoller()
