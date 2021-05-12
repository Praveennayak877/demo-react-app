import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            arr:''
        }
    }
    increment=()=>{
        this.setState(prevState => ({
            count: prevState.count + 1
        })
        )
        console.log(this.state.count)
    }

    plusFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

getData=async()=>{
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                arr:response
            })
        })
        .catch((error)=>{
            console.log('error',error)
        })
        
    } catch (error) {
        console.log('eeee',error)
    }
}


    render() {
        return (
            <div>
                count:{this.state.count}
                <button onClick={()=>this.plusFive()}>+</button>     

                <div>
                    <button onClick={()=>this.getData()} >
                        Get Data
                    </button>
                    </div>   

                {
                    this.state.arr.length ? 
                    this.state.arr.map((item,index)=>{
                        return(
                            <div>
                                {item.userId}{index}
                            </div>
                        )
                    })
                    :
                    console.log('no data found')
                }

            </div>
        )
    }
}
