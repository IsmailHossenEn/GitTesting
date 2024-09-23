import React from 'react'
import data from './data'

const Accordian = () => {
    // const [selected,setSelected]=useState(null)
  return (
    <div>
      {
        data && data.length > 0 ? data.map(item=> <div key={item.id}>{item.name}</div>) : <div>Data Not Found</div> 
      }
    </div>
  )
}

export default Accordian
