import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../Context'

export function Pager (props) {
  const [currentPage, setCurrentPage] = useState(1)
  const lPokemon = props
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  console.log(lPokemon)
  return (
    <div className='row mt-3'>
        <div className='col-md-2 col-6'>
            <button type='button' onClick={(e) => handlePageChange(currentPage - 1)}>👈</button>
        </div>
        <div className='col-md-2'>
            <input type='number' value={currentPage}/>
        </div>
        <div className='col-md-2 col-6'>
            <button type='button' onClick={(e) => handlePageChange(currentPage + 1)}>👉</button>
        </div>
    </div>
  )
}
