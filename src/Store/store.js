
import {configureStore } from '@reduxjs/toolkit'
import formReducer from '../Reducers/reducer'
import logger from 'redux-logger'
import rewardsReducer from '../Reducers/RewardsTodos'
import rewardsDataReducer from '../Reducers/RewardsDataTodos'
import loginReducer from '../Reducers/loginReducer'

export default configureStore({
    reducer: {
         form : formReducer,
        rewards: rewardsReducer,
        rewardsData: rewardsDataReducer,
        login: loginReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
