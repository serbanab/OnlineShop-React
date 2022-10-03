
import actions from "./favoriteActionType";

const addFavorite = (payload) => {

    return {
        type : actions.ADD,
        payload
    }

}

const removeFavorite = (payload) => {
    
    return {
        type : actions.REMOVE,
        payload,
    }

}

export {
    addFavorite,
    removeFavorite,
}