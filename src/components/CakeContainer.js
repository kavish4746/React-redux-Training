import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.totalcake} </h2>
      <button onClick={props.buyCakeMethod}>Buy Cake</button>
    </div>
  )
}


//below function is for accessing the REDUX state in component
//its takes state as parameter and using that we can access properties
const mapStateToProps = state => {
  return {
    totalcake: state.numOfCakes
  }
}


//for dispatching the Methods, so here we map dispatch(butcake()) to props->buyCakeMethod()
const mapDispatchToProps = dispatch => {
  return {
    buyCakeMethod: () => dispatch(buyCake())
  }
}


//this above all possible through connect function-> which connect redux & react
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)