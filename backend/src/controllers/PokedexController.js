const Response = require('../helpers/response')
const PokedexModel = require('../models/PokedexModel')

class PokedexController {
  static getPokemonPerPagination = async(req, res) => {
    const startFrom = parseInt(req.query.from) || 0
    const limit = parseInt(req.query.limit) || 100
    try {
      const pokemon = await PokedexModel.readPokemonPerPagination(startFrom, limit)
      if(pokemon) { Response.success(res, pokemon.message, pokemon.data) }
    }
    catch(err) { Response.failed(res, 500, err.message) }
  }

  static getPokedexStatistic = async(req, res) => {
    try {
      const statistic = await PokedexModel.readPokedexStatistic()
      if(statistic) { Response.success(res, statistic.message, statistic.data) }
    }
    catch(err) { Response.failed(res, 500, err.message) }
  }
}

module.exports = PokedexController