import axios from 'axios';
const apikey = '23a5271ef6a94716ac17ec27e9f4bcd8';

const open_weather_url = "http://api.openweathermap.org/data/2.5/weather?&appid="+apikey+"&units=metric";

module.exports = {
    getTemp: function(location){
        var encoded = encodeURIComponent(location)
        var requestURL = `${open_weather_url}&q=${encoded}`

        return axios.get(requestURL).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message)
            }else{
                return res.data.main.temp
            }
        }, function(res){
            throw newError(res.message);
        })
    }
}