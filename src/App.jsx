import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'nes.css/css/nes.min.css'
import { Home } from './Pages/Home'
import { Pokemon } from './Pages/Pokemon'
import { NavBar } from './Components/NavBar'
import { GlobalProvider } from './Context'

function App () {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemon' element={<Pokemon/>}/>
          </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
