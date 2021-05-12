import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state={
            message: "Subscribe Praveen Nayak"
        }
    }

    updateMessage=()=>{
        this.setState({
            message: "Thank you for Subscribing"
        })
    }

    render() {

        const {message} = this.state

        return (
            <div>
                <h1>
                    {message}
                </h1>
                <button onClick={()=>this.updateMessage()}>Subscribe</button>
            </div>
        )
    }
}
