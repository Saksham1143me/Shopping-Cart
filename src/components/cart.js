import { useSelector } from "react-redux"
import {NavLink} from 'react-router-dom'
import CartItem from "./cartItem"
import {useState,useEffect} from 'react'
function Cart () {
    const {cart}=useSelector((state)=>(state))
    const [totalamount,settotalamount]=useState(0)
    useEffect(()=>{
     settotalamount(cart.reduce(((acc,curr)=>acc+curr.price),0))
    },[cart])
  return (
    <div >
      {
        cart.length>0?(<div className="flex  p-2 space-y-10 mx-auto space-x-1 gap-10 max-w-4xl">
            <div className="flex flex-col max-w-3xl">
               { cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemindex={index}></CartItem>
               ))}
            </div>
            <div className="flex w-4/12 justify-between items-start flex-col h-[70vh]">
                <div className="flex flex-col items-start  h-7/12">
               <div className="text-green-700 leading-4 font-semibold text-2xl">Your Cart</div>
                <div className="text-green-700 font-semibold text-5xl mb-5">Summary</div>
                <p><span className="text-gray-800 text-lg mt-8 font-bold">Total Items:{cart.length}</span></p> </div>
                <div className="w-full flex flex-col items-start justify-center ">
                    <p className="font-semibold">Total Amount:<span className="font-extrabold">${totalamount}</span></p>
                    <button className="w-full font-bold rounded-md hover:bg-green-300 hover:text-green-950 bg-green-700 h-[50px] text-white">Checkout Now</button>
                </div>
                </div>
        </div>):
        (<div><h1>Cart is Empty</h1><NavLink to="/"><button>Shop Now</button></NavLink></div>)
      }
    </div>
  )
}
export default Cart