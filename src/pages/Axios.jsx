import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [datas,setDatas] = useState([])
    const [error,setError]= useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const gettingData = async()=>{
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                setDatas(res.data)
            }catch(error){
                setError('this is error')
            } 
        }
        gettingData()
    })
    
  return (
    <div>
     {datas.map(data=>(
        <div key={data.id}>{data.name}</div>
     ))}
    </div>
  )
}

export default Axios

// useEffect(()=>{
//     const fetchData = async()=>{
//         try{
//         const respionse = await axios.get("https://jsonplaceholder.typicode.com/users")
//         setData(respionse.data)
//         }catch (error){
//           console.error('Thsi is an error msg', error)
//         }
//     }
//     fetchData()
// })