import React, { Component } from 'react'

export default class Welcome extends Component {
    
    render() {
        const {name,lastName} = this.props
        return (
            <div>
                {name}
                {lastName}   
            </div>
        )
    }
}
