const router = require('express').Router()
const AuthContoller = require('../controllers/AuthController')
const PokedexController = require('../controllers/PokedexController')
const RouteGuard = require('./RouteGuard')

router.post('/user/register', AuthContoller.register)
router.post('/user/login', AuthContoller.login)
router.get('/pokedex', RouteGuard, PokedexController.getPokemonPerPagination)
router.get('/pokedex/statistic', RouteGuard, PokedexController.getPokedexStatistic)

module.exports = router