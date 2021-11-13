import React,{useState} from 'react'

function Hook() {
    let[age,setAge] = useState(20)
    return (
        <div>
          <h1 onMouseOver={()=>{setAge(18)}}
          onMouseLeave={()=>{setAge(20)}}>Priyanka age is {age}</h1>
        </div>
    )
}

export default Hook


