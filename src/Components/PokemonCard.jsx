import { COLORES_TIPOS } from '../Constantes'

export function PokemonCard (props) {
  const { pokemon } = props
  return (
        <div className="pokemonCard nes-pointer">
            <div className="imgPokemonCard">
                <img src={pokemon.sprites.front_default} alt="Imagen de pokemon"/>
            </div>
            <div className="dataCardPokemon">
                <div>
                    <label className="col-form-label">{pokemon.name}</label>
                </div>
                <div className="tipos">
                    {pokemon.types.map((type, index) => {
                      return (
                            <label key={index} className="tipo" title={'Tipo: ' + type.type.name}
                            style={{
                              backgroundColor: COLORES_TIPOS[type.type.name],
                              borderColor: COLORES_TIPOS[type.type.name],
                              boxShadow: '0 0.5em ' + COLORES_TIPOS[type.type.name] + ', 0 -0.5em ' + COLORES_TIPOS[type.type.name] + ' , 0.5em 0 ' + COLORES_TIPOS[type.type.name] + ' , -0.5em 0 ' + COLORES_TIPOS[type.type.name]
                            }}>
                                <span>
                                    {type.type.name}
                                </span>
                            </label>
                      )
                    })}
                </div>
            </div>
        </div>
  )
}
