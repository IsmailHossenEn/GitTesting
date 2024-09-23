import React, { useEffect, useState } from 'react'

const Api2 = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res)=>res.json())
     .then((data)=>setUsers(data))
     
    },[])
  return (
    <div>
      {users.map(user=>(
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Api2
