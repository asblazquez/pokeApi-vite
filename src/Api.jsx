import axios from 'axios'
import { URL } from './Constantes'

export async function apiGetAllPokemon (setResult, limit, setLoad) {
  try {
    const response = await axios.get(URL.allPokemons + limit)
    const pokemonList = response.data.results

    const pokemonDataList = await Promise.all(pokemonList.map(async (pokemon) => {
      const pokemonResponse = await axios.get(pokemon.url)
      return pokemonResponse.data
    }))
    setResult(pokemonDataList)
    setLoad(true)
  } catch (error) {
    console.error('Error al obtener los Pokémon:', error)
  }
}
