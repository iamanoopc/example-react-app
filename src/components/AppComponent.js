import React, {Component} from 'react'

import Message from 'Message'
import Form from 'Form'
import Nav from 'Nav'

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            message: this.props.message
        };

        // This binding is necessary to make `this` work in the callback
        this.handleNewName = this.handleNewName.bind(this);
    }
    componentWillReceiveProps(props) {
        // Do something with props...
    }
    handleNewName(update) {
        this.setState(update);
    }

    render() {
        const {name, message} = this.state;

        return (
            <div>
                <Nav />
                
                <Message name={name} message ={message}/>
                <Form onNewName={this.handleNewName}/>
                
            </div>
        );
    }
}
AppComponent.defaultProps = {
    name: "Anoop",
    message: "Hello Mr"
};