import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getAllUsers } from './redux/userSlice';
import User from './User';

function UserList() {
  const dispatch = useDispatch();

  const {users} = useSelector(store=>store.user)
  console.log(users)

  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  return (
    <div>
      {
        users && users.map((user)=>(
          <User key={user.id} user={user}/>
        ))
      }
    </div>
  )
}

export default UserList
