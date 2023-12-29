import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Home from './pages/Home';
import Dhashboard from './pages/Dhashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './pages/Coin';
import Compare from './pages/Compare';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dhashboard/>}/>
        <Route path='/coin/:id' element={<Coin/>}/>
        <Route path='/compare' element={<Compare/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
