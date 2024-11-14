import {FaShoppingCart} from 'react-icons/fa'
import logo from '../logo.png'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar () {
    const {cart}=useSelector((state)=>state)
  return (
    <div>
      <div className="flex justify-between  items-center h-20 mx-auto max-w-4xl">
       <NavLink to="/"><div className='ml-5'><img className='h-12' src={logo} alt='logo'></img></div></NavLink>
        <div className='h-40px flex items-center font-medium text-slate-100 mr-5 space-x-6'>
           <NavLink to="/" ><p className='text-lg hover:text-yellow-500'>Home</p></NavLink>
            <div className='relative'><NavLink to="/cart"><FaShoppingCart className='text-2xl hover:fill-yellow-500' ></FaShoppingCart><span className='absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white -top-1 -right-2'>{cart.length>0 && cart.length}</span></NavLink>
            </div></div>
      </div>
    </div>
  )
}
export default Navbar