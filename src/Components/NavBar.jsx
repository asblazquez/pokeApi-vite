import PokemonLogo from '../assets/PokemonLogo.png'

export function NavBar () {
  return (
        <header className="pl-2 pt-2 pr-2 pb-2 nes-container is-dark">
            <nav className="nes-nav">
                <a href="#" className="nes-nav-item mr-5">
                  <img src={PokemonLogo} alt='Logo de pokemon' className='imgLogoPokemon'/>
                </a>
                <a href="#" className="nes-nav-item mr-5">Pokemons</a>
                <a href="#" className="nes-nav-item mr-5">Items</a>
            </nav>
        </header>
  )
}
