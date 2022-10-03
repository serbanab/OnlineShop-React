
import actions from "./userActionType";

const initialState = {
    data: null,
    loading: false,
    error: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.UPDATE_DATA:
            return Object.assign({}, state, {
                data: action.payload,
                loading: false,
                error: null
            });
        case actions.UPDATE_ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                loading: false
            })
        default:
            return state 
    }
}