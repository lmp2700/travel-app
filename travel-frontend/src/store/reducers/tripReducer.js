const initState = {
    trips: [
        { id: '1', title: 'Paris', content: 'blergh' },
        { id: '2', title: 'Belgium', content: 'blergh' },
        { id: '3', title: 'Morocco', content: 'blergh' },
    ]
}

const tripReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TRIP':
            console.log('created trip', action.trip);
            return state;
        case 'CREATE_TRIP_ERROR':
            console.log('create trip error', action.err)
            return state;
        default:
            return state;
    }
}

export default tripReducer;