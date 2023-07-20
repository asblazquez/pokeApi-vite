import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiGetPokemon } from '../Api'
import { Loader } from '../Components/Loader'
import { Title } from '../Components/Title'
import { ImageSlider } from '../Components/ImageSlider'
import { Stats } from '../Components/Stats'

export function Pokemon () {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [load, setLoad] = useState(false)

  useEffect(() => {
    apiGetPokemon(id, setPokemon, setLoad)
  }, [id])
  console.log(pokemon.sprites)
  return (
    <div className="container-fluid mt-3">
      {load ? null : <Loader />}
      <Title object={pokemon} id={id} type='pokemon' />
      <div className="row justify-center">
        {pokemon.sprites ? <ImageSlider images={Object.values(pokemon.sprites)} id={id} /> : null}
      </div>
      {pokemon.stats ? <Stats stats={pokemon.stats} /> : null}
    </div>
  )
}
