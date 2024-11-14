import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';

function App() {
  return (
    <div className="App w-full min-h-min">
      <div className='bg-slate-900'><Navbar></Navbar></div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
