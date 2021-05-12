import React from 'react'
import Axios from 'axios'

export default function AxiosAPI() {

    const getData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log('error',error)
        })
    }


    return (
        <div>
          <button onClick={()=>getData()}>Get Data</button>          
        </div>
    )
}
