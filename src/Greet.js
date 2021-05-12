import React from 'react'

export default function Greet(props) {
    const {name,lastName} = props;
    return (
        <div>
            {name}
            {" "}
            {lastName}
        </div>
    )
}
