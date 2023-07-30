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

export async function apiGetPokemon (id, setResult, setLoad) {
  try {
    const response = await axios.get(URL.pokemon + id)
    setResult(response.data)
    setLoad(true)
  } catch (error) {
    console.error('Error al obtener el Pokémon:', error)
  }
}

export async function apiGetHability (abilities, setResult, setLoad) {
  try {
    const fullObjectAbilities = []
    abilities.map(async ability => {
      const response = await axios.get(ability.ability.url, {
        headers: {
          'Acept-Language': 'es'
        }
      })
      fullObjectAbilities.push(response.data)
      setLoad(true)
      setResult(fullObjectAbilities)
    })
  } catch (error) {
    console.error('Error al obtener la habilidad:', error)
  }
}

export async function apiGetAllItems (setResult, limit, setLoad) {
  try {
    const response = await axios.get(URL.allItems + limit)
    const itemList = response.data.results

    const itemDataList = await Promise.all(itemList.map(async (item) => {
      const itemResponse = await axios.get(item.url)
      return itemResponse.data
    }))
    setResult(itemDataList)
    setLoad(true)
  } catch (error) {
    console.error('Error al obtener los items:', error)
  }
}
