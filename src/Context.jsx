import { useState, createContext } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [numPokemons, setNumPokemons] = useState(30)
  const [numItems, setNumItems] = useState(30)

  const updateNumPokemons = (num) => {
    setNumPokemons(num)
  }

  const updateNumItems = (num) => {
    setNumItems(num)
  }

  const contextValue = {
    numPokemons,
    updateNumPokemons,
    numItems,
    updateNumItems
  }

  return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
