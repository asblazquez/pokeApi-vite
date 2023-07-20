import { useEffect, useState, useContext } from 'react'
import { apiGetAllPokemon } from '../Api'
import { PokemonCard } from '../Components/PokemonCard'
import { GlobalContext } from '../Context'
import { Loader } from '../Components/Loader'
import ReactPaginate from 'react-paginate'
import { PAGER_OPTIONS } from '../Constantes'
import { DropDown } from '../Components/DropDown'
import { ButtonToTop } from '../Components/ButtonToTop'

export function Home () {
  const { numPokemons, updateNumPokemons } = useContext(GlobalContext)

  const [allPokemons, setAllPokemon] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [inputClass, setInputClass] = useState('is-success')
  const [isLoad, setIsLoad] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const pagesVisited = pageNumber * numPokemons
  const [isVisible, setIsVisible] = useState(false)

  const handleSearchChange = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.includes(newValue.toLowerCase()))
    if (filteredPokemons.length === 0 && newValue !== '') {
      setInputClass('is-error')
    } else {
      setInputClass('is-success')
      setFilteredPokemons(filteredPokemons)
    }
  }

  const handleSelectChange = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    updateNumPokemons(newValue)
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setIsVisible(scrollTop > 100)
  }
  useEffect(() => {
    const getPokemons = () => {
      setIsLoad(false)
      apiGetAllPokemon(setAllPokemon, '1000', setIsLoad)
    }

    getPokemons()
  }, [numPokemons])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayPokemons = (
    filteredPokemons.length === 0
      ? allPokemons
        .slice(pagesVisited, pagesVisited + numPokemons)
        .map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        ))
      : filteredPokemons
        .slice(pagesVisited, pagesVisited + numPokemons)
        .map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        ))
  )

  return (
    <>
      {isVisible ? <ButtonToTop /> : null}
      <div className="container-fluid mt-3">
        {isLoad ? null : <Loader />}
        <div className="row justify-center">
          <div className="col-md-6 col-12">
            <div className="nes-field mr-2">
              <label>Buscar</label>
              <input type="text" id="dark_field" className={'nes-input is-bordered ' + inputClass} placeholder="Charmander" onChange={handleSearchChange}/>
            </div>
          </div>
        </div>
        <div className='pokemonList mt-3'>
            {displayPokemons}
        </div>
        <div className='mt-3 row justify-center'>
          <ReactPaginate
            pageCount={Math.ceil(allPokemons.length / numPokemons)}
            onPageChange={changePage}
            {...PAGER_OPTIONS}
          />
          <DropDown options={['8', '24', '30', '40']} handleSelectChange={handleSelectChange}/>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}
