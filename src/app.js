import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter as Router, IndexRoute, hashHistory,browserHistory} from 'react-router-dom'

import AppComponent from 'AppComponent'
import Weather from 'Weather'
import About from 'About'


// var obj1 =  {
//     name: "Andrew",
//     loaction: "philadelphia"
// }
// var obj2 =  {
//     age: 25,
//     ...obj1
// }

// console.log(obj2)
ReactDOM.render(
    <Router history = {hashHistory}>
        <div>
        

        <Route exact path="/" component={AppComponent}/>
        <Route path="/about" component={About}/>
        <Route path="/weather" component={Weather}/>
        </div>
        
        
    </Router>, 
    document.getElementById("app")
);
