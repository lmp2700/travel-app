export const createTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('trips').add({
            ...trip,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_TRIP', trip });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TRIP_ERROR', err });
        })
    }
};

export const editTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('trips').update({
            ...trip,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId
        }).then(() => {
            dispatch({ type: 'EDIT_TRIP', trip });
        }).catch((err) => {
            dispatch({ type: 'EDIT_TRIP_ERROR', err });
        })
    }
}

export const deleteTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('trips').remove({
            ...trip,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
        }).then(() => {
            dispatch({ type: 'DELETE_TRIP', trip });
        }).catch((err) => {
            dispatch({ type: 'DELETE_TRIP_ERROR', err })
        })
    }
}