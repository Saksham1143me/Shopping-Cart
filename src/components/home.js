import {useState,useEffect} from 'react'
import Spinner from './spinner'
import Product from './product'
function Home () {
    const url="https://fakestoreapi.com/products"
    const [loading,setLoading]=useState(false)
    const [items,setitems]=useState([])
    async function fetchProductData(){
        setLoading(true)
        try {
            const res=await fetch(url)
            const data=await res.json()
             setitems(data)
        } catch (error) {
            console.log("Error while fetching data")
            setitems([])
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchProductData()
    },[])
  return (
    <div  className='w-full min-h-screen flex justify-center items-center mb-16'>
      {
        loading?<Spinner></Spinner>:(
            items.length>0?<div className='grid md:3 sm:2 ex:1 lg:grid-cols-4 max-w-5xl p-2 space-y-10 mx-auto min-h-[80vh] space-x-4 gap-4'>
                {items.map((item)=>(<Product item={item}></Product>))}</div>:
                <div className=' flex justify-center items-center text-red font-semibold text-3xl'>No Data Found</div>)
      }
    </div>
  )
}
export default Home