import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.onFormSubmit = this
            .onFormSubmit
            .bind(this);
    }
    onFormSubmit(event) {
        event.preventDefault();
        let namevalue = this.refs.name.value;
        let messagevalue = this.refs.message.value;
        let updates = {}
        if (namevalue && messagevalue && namevalue.length > 0 && messagevalue.length > 0) {
            this.refs.name.value = "";
            this.refs.message.value = "";
            updates.name = namevalue
            updates.message = messagevalue
            this
                .props
                .onNewName(updates)
        }

        console.log(this.refs.name.value);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name:
                    <input type="text" ref="name"/>
                    <input type="text" ref="message"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}