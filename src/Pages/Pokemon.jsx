import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiGetPokemon } from '../Api'
import { Loader } from '../Components/Loader'
import { Title } from '../Components/Title'
import { ImageSlider } from '../Components/ImageSlider'
import { Stats } from '../Components/Stats'
import { Abilities } from '../Components/Abilities'

export function Pokemon () {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  // const [habilities, sethabilities] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    apiGetPokemon(id, setPokemon, setLoad)
    // if (pokemon.abilities !== undefined && pokemon.abilities.length > 0) {
    // apiGetHability(pokemon.abilities, sethabilities, setLoad)
    // }
  }, [id])

  return (
    <div className="container-fluid mt-3">
      {load ? null : <Loader />}
      <Title object={pokemon} id={id} type='pokemon' />
      <div className="row justify-center">
        {pokemon.sprites ? <ImageSlider images={Object.values(pokemon.sprites)} id={id} /> : null}
      </div>
      <div className='row mt-5 justify-center'>
        <div className='col-md-6 col-12'>
          <label className="tipo" title={'Abilities'}
                              style={{
                                width: '100%',
                                backgroundColor: 'blue',
                                borderColor: 'blue',
                                boxShadow: '0 0.5em ' + 'blue' + ', 0 -0.5em ' + 'blue' + ' , 0.5em 0 ' + 'blue' + ' , -0.5em 0 ' + 'blue'
                              }}>{'Abilities'}
                          </label>
        </div>
      </div>
      <div className='row mt-3 justify-center'>
        {pokemon.abilities ? <Abilities abilities={pokemon.abilities} /> : null
      }
      </div>
      {pokemon.stats ? <Stats stats={pokemon.stats} /> : null}
    </div>
  )
}
