const initState = {
    users: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('created user', action.user);
            return state;
        case 'CREATE_USER_ERROR':
            console.log('create user error', action.err)
            return state;
        case 'EDIT_USER':
            console.log('edited user', action.user);
            return state;
        case 'EDIT_USER_ERROR':
            console.log('edited user error', action.err)
            return state;
        case 'DELETE_USER':
            console.log('deleted user', action.user);
            return state;
        case 'DELETE_USER_ERROR':
            console.log('deleted user error', action.err)
            return state;
        default: return state;
    }
}

export default userReducer;