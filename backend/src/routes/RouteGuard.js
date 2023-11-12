const jwt = require('jsonwebtoken')
const Response = require('../helpers/response')

const RouteGuard = (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if(!authorizationHeader) {
    Response.failed(res, 401, 'Invalid Token')
  }
  else {
    const token = authorizationHeader.split(' ')[1]
    jwt.verify(token, 'jwtSecretKey', (err, result) => {
      console.log(err)
      if(err) { Response.failed(res, 400, err.name) }
      else { next() }
    })
  }
}

module.exports = RouteGuard