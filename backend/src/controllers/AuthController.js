const Response = require('../helpers/response')
const AuthModel = require('../models/AuthModel')

const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')

class AuthController {
	// REGISTER
	static register = async(req, res) => {
		const { nickname, username, password } = req.body
		if(!nickname|| !username || !password) {
			Response.failed(res, 400, 'All fields must be filled!')
		}
		else if(nickname.length < 8 || username.length < 8 || password.length < 8) {
			Response.failed(res, 400, 'All fields minimum length is 8 characters!')
		}
		else {
			try {
				const createUser = await AuthModel.createUser(nickname, username, bcrypt.hashSync(password, salt))
				if(createUser) { Response.success(res, createUser.message, createUser.data) }
			}
			catch(err) { Response.failed(res, 500, err.message) }
		}
	}
	// LOGIN
	static login = async(req, res) => {
		try {
			const userData = await AuthModel.readUserByUsername(req.body.username)
			if(userData) {
				const isPasswordCorrect = bcrypt.compareSync(req.body.password, userData.password)
				if(isPasswordCorrect) {
					const payload = {
						id: userData._id,
						nickname: userData.nickname,
						username: userData.username
					}
					jwt.sign(payload, 'jwtSecretKey', { expiresIn: '1h' }, (err, token) => {
						Response.success(res, 'Login successful', { ...payload, token })
					})
				}
				else { Response.failed(res, 400, 'Wrong password') }
			}
		}
		catch(err) { Response.failed(res, 500, err.message) }
	}
}

module.exports = AuthController