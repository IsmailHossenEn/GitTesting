import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [user,setUser]=useState([])

    useEffect(()=>{

       const fetchdata = async()=>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUser(response.data)
        }catch(error){
            console.error('Error retieving data:', error)
        }     
    }
    fetchdata()
    },[])
  return (
    <div>
    {user.map(ur=>(
        <div key={ur.id}>{ur.name}</div>
    ))}    
    </div>
  )
}

export default Api
