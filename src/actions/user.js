export const LogIn = () => {
    return {
        type: "SET_LOGGED",
        payload: true
    }
}

export const LogOut = () => {
    return {
        type: "UNSET_LOGGED",
        payload: false
    }
}

export const ChangeProfile = () => {
    return {
        type: "CHANGE_PROFILE",
        payload: true
    }
}

export const SaveProfile = () => {
    return {
        type: "SAVE_PROFILE",
        payload: false
    }
}