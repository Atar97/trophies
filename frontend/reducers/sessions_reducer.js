export default (state = {id: null}, action) => {
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
    }
}