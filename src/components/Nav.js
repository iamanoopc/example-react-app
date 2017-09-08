import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

let Nav = (props) => {
       
    return (
        <div>
            <h2>Navigation</h2>
            <NavLink exact={true} activeClassName="active" activeStyle={{color: "red"}} to="/">Home </NavLink>
            <NavLink activeClassName="active" activeStyle={{color: "red"}} to="/about">About </NavLink>
            <NavLink activeClassName="active" activeStyle={{color: "red"}} to="/weather">Weather </NavLink>
        </div>
    );
}
module.exports = Nav