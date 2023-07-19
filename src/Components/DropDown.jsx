import React, { useContext } from 'react'
import { GlobalContext } from '../Context'

export function DropDown (props) {
  const { options, handleSelectChange } = props
  const { numPokemons } = useContext(GlobalContext)

  return (
    <div className='nes-select col-12 col-md-1'>
        <select required id="default_select" onChange={handleSelectChange} className="nes-select" defaultValue={numPokemons}>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
