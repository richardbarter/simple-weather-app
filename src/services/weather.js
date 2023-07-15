import axios from 'axios'



const getWeather = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=51.4551&lon=-0.9711&appid=${process.env.REACT_APP_WEATHER_API}`)
    // const weatherData = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=51.4563&lon=-0.9711&appid=${process.env.REACT_APP_WEATHER_API}`)
    // console.log('weather data is ', weatherData);
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // const response = await axios.get(` https://api.openweathermap.org/data/2.5/weather?id=524901&appid=${process.env.REACT_APP_WEATHER_API}`)
    //console.log('weather data is ', response);
    return response.data  
}

export default { getWeather }