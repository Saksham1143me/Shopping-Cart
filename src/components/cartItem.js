import toast from 'react-hot-toast'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slice/cartSlice'
function CartItem ({item,itemindex}) {
    const dispatch=useDispatch()
    function removefromcart(){
      dispatch(remove(item.id))
      toast.error("Item removed successfully")
    }
  return (
    <div>
      <div className='border-b-2 border-gray-900 flex p-4 gap-5 justify-between items-center max-w-lg'>
        <div className='h-[180px] '><img className='w-full h-full' src={item.image} alt='img'></img></div>
       <div className='p-1 flex flex-col gap-2 w-7/12 font-semibold items-start text-left '> <div><h1>{item.title}</h1></div>
        <div><h1 className='w-full text-gray-400 font-normal text-[10px] text-left text-balance'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1></div>
        <div className='p-4 flex justify-between w-full'><div className='text-green-600 font-bold'><h1>${item.price}</h1></div>
        <div><button className='bg-rose-300 p-2 rounded-full hover:scale-110 ' onClick={removefromcart}><FcDeleteDatabase fill='red'/></button></div>
        </div> </div></div>
    </div>
  )
}
export default CartItem