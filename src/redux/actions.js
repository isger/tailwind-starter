import {INCREMENT, DECREMENT, SELECT_PLATFORM} from "./actionTypes";


export const incrementCounter = _ => ({
    type: INCREMENT,
});

export const decrementCounter = _ => ({
    type: DECREMENT,
});

export const selectPlatform = (platform) => ({
    type: SELECT_PLATFORM,
    payload: {
        platform
    }
});