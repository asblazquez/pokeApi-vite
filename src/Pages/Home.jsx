import { useEffect, useState, useContext } from 'react'
import { apiGetAllPokemon } from '../Api'
import { PokemonCard } from '../Components/PokemonCard'
import { GlobalContext } from '../Context'
import { Loader } from '../Components/Loader'
import ReactPaginate from 'react-paginate'

export function Home () {
  const { numPokemons, updateNumPokemons } = useContext(GlobalContext)

  const [allPokemons, setAllPokemon] = useState([])
  const [isLoad, setIsLoad] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const pagesVisited = pageNumber * numPokemons

  // const handleRangeChange = (event) => {
  //   const newValue = event.target.value
  //   updateNumPokemons(newValue)
  // }

  useEffect(() => {
    const getPokemons = () => {
      setIsLoad(false)
      apiGetAllPokemon(setAllPokemon, '1000', setIsLoad)
    }

    getPokemons()
  }, [numPokemons])

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayPokemons = (
    allPokemons
      .slice(pagesVisited, pagesVisited + numPokemons)
      .map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id}/>
      ))
  )

  return (
    <div className="container-fluid mt-3">
      {isLoad ? null : <Loader />}
      <div className="row justify-center">
        <div className="col-md-6 col-12">
          <div className="nes-field mr-2">
            <label>Buscar</label>
            <input type="text" id="dark_field" className="nes-input is-bordered" placeholder="Charmander"/>
          </div>
        </div>
        <div className="col-md-2 col-12 align-self-end">
          <button type="button" className="nes-btn is-primary w-full">
            Buscar
          </button>
        </div>
      </div>
      <div className='pokemonList mt-3'>
          {displayPokemons}
      </div>
      <div className='mt-3'>
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          pageCount={Math.ceil(allPokemons.length / numPokemons)}
          onPageChange={changePage}
          containerClassName={'row justify-center'}
          activeClassName={'is-disabled'}
          pageClassName={'nes-button'}
          previousClassName={'nes-button is-primary'}
          nextClassName={'nes-button is-primary'}
          previousLinkClassName={'nes-pointer'}
          nextLinkClassName={'nes-pointer'}
          disabledClassName={'is-disabled'}
          breakClassName={'nes-brake'}
        />
      </div>
    </div>
  )
}
