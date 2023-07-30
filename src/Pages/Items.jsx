import { useEffect, useState, useContext } from 'react'
import { apiGetAllItems } from '../Api'
import { ItemCard } from '../Components/ItemCard'
import { GlobalContext } from '../Context'
import { Loader } from '../Components/Loader'
import ReactPaginate from 'react-paginate'
import { PAGER_OPTIONS } from '../Constantes'
import { DropDown } from '../Components/DropDown'
import { ButtonToTop } from '../Components/ButtonToTop'

export function Items () {
  const { numItems, updateNumItems } = useContext(GlobalContext)

  const [allItems, setAllItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [inputClass, setInputClass] = useState('is-success')
  const [isLoad, setIsLoad] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const pagesVisited = pageNumber * numItems
  const [isVisible, setIsVisible] = useState(false)

  const handleSearchChange = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    const filteredItems = allItems.filter(item => item.name.includes(newValue.toLowerCase()))
    if (filteredItems.length === 0 && newValue !== '') {
      setInputClass('is-error')
    } else {
      setInputClass('is-success')
      setFilteredItems(filteredItems)
    }
  }

  const handleSelectChange = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    updateNumItems(newValue)
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setIsVisible(scrollTop > 100)
  }
  useEffect(() => {
    const getPokemons = () => {
      setIsLoad(false)
      apiGetAllItems(setAllItems, '1000', setIsLoad)
    }

    getPokemons()
  }, [numItems])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayItems = (
    filteredItems.length === 0
      ? allItems
        .slice(pagesVisited, pagesVisited + numItems)
        .map((item) => (
            <ItemCard item={item} key={item.id}/>
        ))
      : filteredItems
        .slice(pagesVisited, pagesVisited + numItems)
        .map((item) => (
            <ItemCard item={item} key={item.id}/>
        ))
  )
  console.log(allItems)
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
            {displayItems}
        </div>
        <div className='mt-3 row justify-center'>
          <ReactPaginate
            pageCount={Math.ceil(allItems.length / numItems)}
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
