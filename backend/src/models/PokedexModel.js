const db = require('../../db')

const pokedexSchema = new db.Schema(
    {
      pokedex_number: { type: Number, required: true },
      name: { type: String, default: '' },
      german_name: { type: String, default: '' },
      japanese_name: { type: String, default: '' },
      generation: { type: Number, default: 0 },
      status: { type: String, default: '' },
      species: { type: String, default: '' },
      type_number: { type: Number, default: 0 },
      type_1: { type: String, default: '' },
      type_2: { type: String, default: '' },
      height_m: { type: Number, default: 0 },
      weight_kg: { type: Number, default: 0 },
      abilities_number: { type: Number, default: 0 },
      ability_1: { type: String, default: '' },
      ability_2: { type: String, default: '' },
      ability_hidden: { type: String, default: '' },
      total_points: { type: Number, default: 0 },
      hp: { type: Number, default: 0 },
      attack: { type: Number, default: 0 },
      defense: { type: Number, default: 0 },
      sp_attack: { type: Number, default: 0 },
      sp_defense: { type: Number, default: 0 },
      speed: { type: Number, default: 0 },
      catch_rate: { type: Number, default: 0 },
      base_friendship: { type: Number, default: 0 },
      base_experience: { type: Number, default: 0 },
      growth_rate: { type: String, default: '' },
      egg_type_number: { type: Number, default: 0 },
      egg_type_1: { type: String, default: '' },
      egg_type_2: { type: String, default: '' },
      percentage_male: { type: Number, default: 0 },
      egg_cycles: { type: Number, default: 0 },
      against_normal: { type: Number, default: 0 },
      against_fire: { type: Number, default: 0 },
      against_water: { type: Number, default: 0 },
      against_electric: { type: Number, default: 0 },
      against_grass: { type: Number, default: 0 },
      against_ice: { type: Number, default: 0 },
      against_fight: { type: Number, default: 0 },
      against_poison: { type: Number, default: 0 },
      against_ground: { type: Number, default: 0 },
      against_flying: { type: Number, default: 0 },
      against_psychic: { type: Number, default: 0 },
      against_bug: { type: Number, default: 0 },
      against_rock: { type: Number, default: 0 },
      against_ghost: { type: Number, default: 0 },
      against_dragon: { type: Number, default: 0 },
      against_dark: { type: Number, default: 0 },
      against_steel: { type: Number, default: 0 },
      against_fairy: { type: Number, default: 0 }
    },
    {
      timestamps: true,
      collection: 'pokedex'
    }
)

const pokedex = db.model('pokedex', pokedexSchema)

class PokedexModel {
  static readPokemonPerPagination = (startFrom, limit) => {
    return new Promise(async(resolve, reject) => {
      const result = await pokedex.find().skip(startFrom).limit(limit)
      try {
        if(result) { 
          resolve({
            message: `Successfully get ${ limit } pokemons from Pokedex and starts from ${ startFrom }`,
            data: result
          })
        }
      }
      catch(err) { reject({ message: 'Pokedex is empty' }) }
    })
  }
  
  static readPokedexStatistic = () => {
    return new Promise(async(resolve, reject) => {
      const generations = await pokedex.aggregate([
        { $group: { _id: '$generation', count: { $sum: 1 } } },
        { $sort: { _id: +1 } }
      ])
      const types = await pokedex.aggregate([{ $group: { _id: '$type_1', count: { $sum: 1 } } }])
      const topFive = await pokedex.find().sort({'total_points': -1}).limit(5)
      try{
        if(types && generations && topFive) { 
          resolve({ 
            message: 'Successfully read all statistics', 
            data: { generations, types, topFive } 
          }) 
        }
      }
      catch(err) { reject({ message: 'Failed to read all statistics' }) }
    })
  }
}

module.exports = PokedexModel