import { USER_ACTION_TYPES } from './user.types'

// REDUCER FOR USER 

// Initial state
const INITIAL_USER_STATE = {
    currentUser: null
} 

// User Reducer
export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
    const {type, payload} = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
} 