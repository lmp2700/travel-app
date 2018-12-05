export const editUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const user = getState().firebase.users;
        // const userId = getState().firebase.auth.uid;
        firestore.collection('users').update({
            ...user,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }).then(() => {
            dispatch({ type: 'EDIT_USER', user });
        }).catch((err) => {
            dispatch({ type: 'EDIT_USER_ERROR', err });
        })
    }
}