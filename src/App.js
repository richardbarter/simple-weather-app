import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { initializeWeather } from './reducers/weatherReducer';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeWeather())
  }, [dispatch])

  const weatherData = useSelector(( { weather }) => {
    return weather
  })
  console.log('weater data is ', weatherData);
  console.log('test reference env varialble', process.env.REACT_APP_WEATHER_API);
  //need to find way of getting wet bulb temperature for each location.

  //need to be able to get the hottest temperature from each country? And rank them?
  
  return (
    <div>
      test
      {weatherData.name}
    </div>
  );
}

export default App;
