import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from './reducers/weatherReducer'


// const store = configureStore({
//   reducer: {
//     blogs: blogReducer,
//     notification: notificationReducer,
//     user: userReducer,
//   },
// })

const store = configureStore({
    reducer: {
        weather: weatherReducer
    },
})

export default store
