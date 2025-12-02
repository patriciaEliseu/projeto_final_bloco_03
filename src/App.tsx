
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


type MenuState = 'closed' | 'open';


function App() {
  const [menuState, setMenuState] = useState<MenuState>('closed');

   const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed');
  };

  const closeMenu = (): void => {
    setMenuState('closed');
  };

  return (
    <>
    <BrowserRouter>
    <div className="flex flex-col min-h-screen"></div>
      <Navbar 
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}
          />
      <div className='flex-1 w-full pt-16 bg-slate-100'>
      <Routes>
        <Route path='/' element={<Home/>}/>
          
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
