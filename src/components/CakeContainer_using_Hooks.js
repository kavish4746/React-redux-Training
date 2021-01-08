import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function CakeContainer_using_Hooks() {

    const totalcake=useSelector(state=>state.numOfCakes);

    const dispatch=useDispatch();
    return (
        <div>
            <h4>Number of Cakes : {totalcake} </h4>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default CakeContainer_using_Hooks
