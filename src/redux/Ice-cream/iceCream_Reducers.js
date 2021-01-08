import { BUY_ICECREAM } from "./iceCream_Types"

const initialState={
    noOfIcecream:20
}

const icecreamReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                ...state,
                noOfIcecream:state.noOfIcecream-1
            }
        default:
                return state
    }
}

export default icecreamReducer;