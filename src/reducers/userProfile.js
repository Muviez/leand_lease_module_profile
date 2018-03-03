const initialState = {
    changeProfile: false
}

export default function userProfile(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_PROFILE':
            return {...state, changeProfile: action.payload}
        case 'SAVE_PROFILE':
            return {...state, changeProfile: action.payload}
        default:
            return state
    }
}