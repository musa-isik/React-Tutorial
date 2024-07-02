import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users" + userId)
    console.log(response.data)
  }

  const createUser = async (user) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    console.log(response.data)
  }

  const updateUser = async (userId, updateUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser)
  }

  const deleteUserById = async(userId) =>{
   const response = await axios.delete(`${BASE_URL}/users/${userId}`)
   console.log(response.data)
  }

  const user = {
    "username": "ahmet",
    "password": "xyz"
  }
  // useEffect(()=>{
  //  createUser(user)
  // },[])

  //useEffect(() => {
  //  updateUser("1c54", {
  //    "username": "mehmet",
  //    "password": "asaad"
  //  })
  //}, [])

  // useEffect(()=>{
  //   deleteUserById("775f")
  // },[])
  
  return (
    <div>
      asd
    </div>
  )
}

export default App
