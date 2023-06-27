import { useEffect, useState, useContext } from 'react'
import { apiGetAllPokemon } from '../Api'
import { PokemonCard } from '../Components/PokemonCard'
import { GlobalContext } from '../Context'
import { Loader } from '../Components/Loader'
import { Pager } from '../Components/Pager'

export function Home () {
  const [allPokemons, setAllPokemon] = useState([])
  const [isLoad, setIsLoad] = useState(false)
  const { numPokemons, updateNumPokemons } = useContext(GlobalContext)

  const handleRangeChange = (event) => {
    const newValue = event.target.value
    updateNumPokemons(newValue)
  }

  useEffect(() => {
    const getPokemons = () => {
      setIsLoad(false)
      apiGetAllPokemon(setAllPokemon, numPokemons, setIsLoad)
    }

    getPokemons()
  }, [numPokemons])
  return (
    <div className="container mt-3">
      {isLoad ? null : <Loader />}
      <div>
        <input className='mr-2 nes-range' type='range' min={1} max={100} value={numPokemons} onChange={handleRangeChange}/>
        <input type="text" id="dark_field" className="nes-input is-bordered w-1" value={numPokemons} />
      </div>
      <div className="row justify-center">
        <div className="col-md-6 col-12">
          <div className="nes-field mr-2">
            <label>Buscar</label>
            <input type="text" id="dark_field" className="nes-input is-bordered" placeholder="Charmander"/>
          </div>
        </div>
        <div className="col-md-2 col-12 align-self-end">
          <button type="button" className="nes-btn is-primary">
            Buscar
          </button>
        </div>
      </div>
      <div className='pokemonList mt-3'>
          {Array.isArray(allPokemons) && allPokemons.map(pokemon => {
            return (
              <PokemonCard pokemon={pokemon} key={pokemon.id}/>
            )
          })}
      </div>
      {<Pager lPOkemons={allPokemons}/>}
    </div>

  )
}
