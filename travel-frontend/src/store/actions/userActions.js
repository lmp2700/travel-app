export const editUser = (users) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const user = getState().firebase.users;
        const userId = getState().firebase.auth.uid;
        firestore.collection('users').set({
            ...users,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            id: userId
        }).then(() => {
            dispatch({ type: 'EDIT_USER', user });
        }).catch((err) => {
            dispatch({ type: 'EDIT_USER_ERROR', err });
        })
    }
}

export const deleteUser = (users) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const user = getState().firebase.users;
        const userId = getState().firebase.auth.uid;
        firestore.collection('users').delete({
            ...users,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            id: userId
        }).then(() => {
            dispatch({ type: 'DELETE_USER', user });
        }).catch((err) => {
            dispatch({ type: 'DELETE_USER_ERROR', err });
        })
    }
}