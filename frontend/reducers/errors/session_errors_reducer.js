import {CLEAR_ERRORS, RECEIVE_SESSION_ERRORS} from '../../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_SESSION_ERRORS: 
            return action.errors;
        default:
            return state;
    }
}