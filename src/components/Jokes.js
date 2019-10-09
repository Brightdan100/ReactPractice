import React from 'react'

function Jokes(props) {
    return (
        <div className="jokes">
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
            <hr/>
        </div>
    )
}

export default Jokes