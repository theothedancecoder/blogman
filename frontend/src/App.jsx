import { useState, useEffect } from 'react'
import axios from "axios"


import './App.css'


function App() {
  const [data, setData] =useState()
  useEffect(()=>{
    async function grabData(){
      const response = await axios.get("http://localhost:3000/posts/")
      console.log(response)
      if (response.status ===200){setData(response.data)}

    }
    grabData()
  },[])

  return (
    <>
     {JSON.stringify(data)}
    </>
  )
}

export default App
