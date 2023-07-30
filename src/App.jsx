import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'nes.css/css/nes.min.css'
import { Home } from './Pages/Home'
import { Pokemon } from './Pages/Pokemon'
import { NavBar } from './Components/NavBar'
import { GlobalProvider } from './Context'
import { Items } from './Pages/Items'
import { Item } from './Pages/Item'

function App () {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemon/:id' element={<Pokemon/>}/>
            <Route path='/items' element={<Items/>}/>
            <Route path='/item/:id' element={<Item />}/>
          </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
