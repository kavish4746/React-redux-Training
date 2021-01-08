import React ,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function CakeContainer_using_Hooks() {

    const [number,setNumber]=useState(0);
    const totalcake=useSelector(state=>state.cake.numOfCakes);

    const dispatch=useDispatch();
    return (
        <div>
            <h4>Number of Cakes : {totalcake} </h4>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}></input>
            <button onClick={()=>dispatch(buyCake(number))}>Buy cake</button>
        </div>
    )
}

export default CakeContainer_using_Hooks
