import React from 'react'
import  { useSelector,useDispatch } from 'react-redux'
import { buyicecream } from '../redux'

function IcecreamContainer() {

    const totalicecream=useSelector(state=>state.icecream.noOfIcecream);
    const dispatch=useDispatch();

    return (
        <div>
            <h4>total icecream: {totalicecream}</h4>
            <button onClick={()=>dispatch(buyicecream())}>Buy Icecream </button>
        </div>
    )
}
export default IcecreamContainer;
