import { signInWithGoogle, signOut , signInWithFaceBook} from '../../apis/firebase/firebase';
import actions from "./userActionType";

function startLoading() {
    return {
        type: actions.LOAD,
    }
}
function updateUserData(payload) {
    return {
        type: actions.UPDATE_DATA,
        payload
    }
}
function updateUserError(payload) {
    return {
        type: actions.UPDATE_ERROR,
        payload
    }
}

export function loginUser(provider) {
    
    return (dispatch) => {
        dispatch(startLoading());

        if(provider === "google"){

             signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));

        }).catch(error => {

            dispatch(updateUserError(error));

        });
        }else{

            signInWithFaceBook().then(res => {
                dispatch(updateUserData(res.user));
                console.log("FACEBOOK" , res.user);

         }).catch(err => {

            dispatch(updateUserError(err));
            
         });
        }
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}