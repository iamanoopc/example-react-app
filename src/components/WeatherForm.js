import React, {Component} from 'react'
export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(event){
        event.preventDefault();
        let location = this.refs.location.value;
        this.refs.location.value = ""
        this.props.onSearch(location)
    }
    render() {

        return (
            <div>
                <h2>WeatherForm Compoannet</h2>
                <form onSubmit={this.formSubmit}>
                    <input type="text" ref="location" />
                    <button>Get Weather</button>
                </form>
                 
            </div>
        );
    }
}
