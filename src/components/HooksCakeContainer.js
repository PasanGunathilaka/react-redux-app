import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

  const [number,setNumber] = useState(1)

 const numOfCakes=   useSelector(state => state.cake.numOfCakes)
 const dispatch = useDispatch()
 
  return (
    <div>
        <h2>num of cakes -{numOfCakes}</h2>
        <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)  }/>
        <button onClick={()=> dispatch(buyCake(number))}>Buy {number} Cake</button>
        
    </div>
  )
}

export default HooksCakeContainer