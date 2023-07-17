import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiGetPokemon } from '../Api'
import { Loader } from '../Components/Loader'

export function Pokemon () {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [load, setLoad] = useState(false)

  useEffect(() => {
    apiGetPokemon(id, setPokemon, setLoad)
  }, [id])
  console.log(pokemon)
  return (
    <div className="container-fluid mt-3">
      {load ? null : <Loader />}
      <p>{pokemon.name}</p>
    </div>
  )
}
