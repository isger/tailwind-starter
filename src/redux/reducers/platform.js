import { SELECT_PLATFORM } from "../actionTypes";

const initialState = {
    platform: {
        display: 'Battle.net',
        value: 'battle'
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_PLATFORM: {
            return {
                ...state,
                platform: action.payload
            };
        }
        default:
            return state;
    }
}
