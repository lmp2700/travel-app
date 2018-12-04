const initState = {
    trips: []
}

const tripReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TRIP':
            console.log('created trip', action.trip);
            return state;
        case 'CREATE_TRIP_ERROR':
            console.log('create trip error', action.err)
            return state;
        case 'EDIT_TRIP':
            console.log('edited trip', action.trip);
            return state;
        case 'EDIT_TRIP_ERROR':
            console.log('edited trip error', action.err)
            return state;
        case 'DELETE_TRIP':
            console.log('deleted trip', action.trip);
            return state;
        case 'DELETE_TRIP_ERROR':
            console.log('deleted trip error', action.err)
            return state;
    }
}

export default tripReducer;