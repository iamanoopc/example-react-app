import React, {Component} from 'react'
import Nav from 'Nav'
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeather from 'openWeather';
export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false
        }
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(location){
        var that = this
        this.setState({
            isLoading:true
        })
        openWeather.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp:temp,
                isLoading: false,
                error:false
            })
        }, function(err){
           console.log(err)
           that.setState({
                error: true,
                isLoading: false
            })
        })
    }
    render() {
        const {location, temp, isLoading, error} = this.state
        function renderMessage(){
            if(isLoading){
                return <h1>Loading Weather data</h1>
            }else if(error){
                return <h1>Such city doesn't exist</h1>
            
            }else if(temp && location && !error){
                return <WeatherMessage location={location} temp={temp} />
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.onSearch}/>
                {renderMessage()}
            </div>
        );
    }
}
