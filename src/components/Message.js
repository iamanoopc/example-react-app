import React, {Component} from 'react'

let Message = ({name, message}) => {
        return (
            <div>
                <h1>
                    {name}
                </h1>
                <p>{message}</p>
            </div>
        )
}
module.exports = Message