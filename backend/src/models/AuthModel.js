const db = require('../../db')

const usersSchema = new db.Schema(
	{
		nickname: {
			type: String,
			unique: true,
			required: true
		},
		username: {
			type: String,
			unique: true,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
		collection: 'users'
	}
)

const users = db.model('users', usersSchema)

class AuthModel {
	static createUser = (nickname, username, password) => {
		return new Promise(async(resolve, reject) => {
			try {
				const result = await users.create({ nickname, username, password })
				if(result) {
					const { nickname, username, createdAt } = result
					resolve({
						message: 'Register successful',
						data: { nickname, username, createdAt }
					})
				}
			}
			catch(err) {
				reject({ message: 'Nickname or username already exists' }) }
		})
	}
	static readUserByUsername = (username) => {
		return new Promise(async(resolve, reject) => {
			try {
				const findUser = await users.findOne({ username })
				if(findUser) { resolve(findUser) }
				else { reject({ message: 'Username is not exist' }) }
			}
			catch(err) { reject({ message: 'Something wrong with the database when try to find this user' }) }
		})
	}
}

module.exports = AuthModel