import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slice/cartSlice'
function Product ({item}) {
    const {cart}=useSelector((state)=>state)
const dispatch=useDispatch()
const addHandler=()=>{
    dispatch(add(item))
     toast.success("Item added successfully")
}
const removeHandler=()=>{
dispatch(remove(item.id))
toast.error("Item removed Successfully")
}

    return (
    <div className='gap-3 p-4 rounded-xl mt-10 ml-5 flex flex-col items-center justify-between 
    hover:scale-110 transition-all duration-300 ease-in shadow-xl hover:shadow-slate-300 '>
      <div>
        <p  className='text-gray-800 font-semibold text-lg text-left truncate w-40 mt-1'>{item.title}</p>
      </div>
      <div>
        <p className='w-30 text-gray-400 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'><img className='h-full w-full' src={item.image} alt="item"></img></div>
      <div className='flex justify-between gap-10 items w-full mt-5'>
        <div><p className='text-green-600 font-semibold'>${item.price}</p></div>
      <div>{cart.some((p)=>p.id===item.id)?<button className='flex-nowrap text-nowrap flex justify-center items-center text-gray-700 border-2 border-gray-700 rounded-full font-semibold py-1 px-2 uppercase text-[12px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in '
       onClick={removeHandler}>Remove item
       </button>:<button className='flex-nowrap flex justify-center text-nowrap items-center text-gray-700 border-2 border-gray-700 rounded-full font-semibold py-1 px-2 uppercase text-[12px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={addHandler}>Add to cart</button>}</div>
      </div>
    </div>
  )
}
export default Product