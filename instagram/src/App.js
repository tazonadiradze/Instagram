import React, { Fragment, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import axios from 'axios'
import FakeData from './FakeData/FakeData'


export default function App() {
  const [users, setUsers] = useState([])



  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(res => setUsers(((res.data))))
      .catch(error => console.log(error))

  })
  return (
    <div className='app'>
      <div className='maindiv'>
        <Navbar />
      </div>
      <div className='rightside'>

        <FakeData />
      </div>
    </div>
  )
}
