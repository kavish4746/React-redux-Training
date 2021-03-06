import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchUser} from '../redux';

function UserContainer({fetchUser,userData}) {

    useEffect(()=>{
        fetchUser();
    },[])
    return userData.loading ?(
        <h2>Loading....</h2>
    ):userData.error ?(
        <h2>Error</h2>
    ):(
        <div>
            <h3>List of user</h3>
            <div>
                {
                    userData.users.map(user=><p>{user.name}</p>)
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)