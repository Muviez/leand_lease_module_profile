const initialState = {
    changeProfile: false,
    pageSubcategories: "ps1",
    profileInformation: {}
}

export default function userProfile(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_PROFILE':
            return {...state, changeProfile: action.payload}
        case 'SAVE_PROFILE':
            return {...state, changeProfile: action.payload}
        case 'FIRST_TAB':
            return {...state, pageSubcategories: action.payload}
        case 'SECOND_TAB':
            return {...state, pageSubcategories: action.payload}
        case 'THIRD_TAB':
            return {...state, pageSubcategories: action.payload}
        case 'SAVE_PROFILE_INFO':
            return {...state, profileInformation: action.date}
        default:
            return state
    }
}