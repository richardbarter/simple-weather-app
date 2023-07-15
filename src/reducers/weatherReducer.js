import { createSlice } from "@reduxjs/toolkit"
import weatherService from '../services/weather'



const weatherSlice = createSlice({
    name: 'weather',
    initialState: [],
    reducers: {
        setWeather(state, action) {
            return action.payload
        }
    }
})


export const initializeWeather = () => {
    return async (dispatch) => {
        const allWeather = await weatherService.getWeather()
        dispatch(setWeather(allWeather))
    }
}

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer