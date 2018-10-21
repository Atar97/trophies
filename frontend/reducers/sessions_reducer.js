import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

export default (state = {id: null}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return action.payload.session;
        default:
            return state;
    }
}