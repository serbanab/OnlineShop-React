
import actions from "./cartActionType";


export function addToCart(payload) {
    return {
        type: actions.ADD,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: actions.REMOVE,
        payload
    }
}