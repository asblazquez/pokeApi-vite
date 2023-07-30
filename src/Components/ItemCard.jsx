import { COLORER_ATRIBUTOS } from '../Constantes'
import { Link } from 'react-router-dom'

export function ItemCard (props) {
  const { item } = props
  console.log(item)
  return (
    <Link to={'/item/' + item.id} className="pokemonCard nes-pointer">
        <div className="imgPokemonCard">
            <img src={item.sprites.default} alt="Imagen de item" style={{ height: '5rem' }}/>
        </div>
        <div className="dataCardPokemon">
            <div>
                <label className="col-form-label">{item.name}</label>
            </div>
            <div className="tipos">
              <label className="tipo" title={'Tipo: ' + item.category.name}
                style={{
                  backgroundColor: COLORER_ATRIBUTOS[item.category.name],
                  borderColor: COLORER_ATRIBUTOS[item.category.name],
                  boxShadow: '0 0.5em ' + COLORER_ATRIBUTOS[item.category.name] + ', 0 -0.5em ' + COLORER_ATRIBUTOS[item.category.name] + ' , 0.5em 0 ' + COLORER_ATRIBUTOS[item.category.name] + ' , -0.5em 0 ' + COLORER_ATRIBUTOS[item.category.name]
                }}>
                    <span>
                        {item.category.name}
                    </span>
                </label>
            </div>
        </div>
    </Link>
  )
}
