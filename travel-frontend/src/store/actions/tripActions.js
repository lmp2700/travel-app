export const createTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('trips').add({
            ...trip,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TRIP', trip });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TRIP_ERROR', err });
        })
    }
};