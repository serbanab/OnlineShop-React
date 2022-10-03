
import actions from "./favoriteActionType";

  const initialState = {

    favorites : [],
   
}

const favoriteReducer = (state = initialState , action) => {
        switch (action.type) {
            case actions.ADD:

                const found = state.favorites.find(item => {
                    if(item.id === action.payload.favorite.id) return true;
                });

                if(found === undefined){

                    return {
                        favorites : [...state.favorites , action.payload.favorite],
                    }
                    
                }

                case actions.REMOVE : 
                
                const filtered =  state.favorites.filter(item => {
                    if(item.id !== action.payload) return true
                })

                    return {
                        ...state,
                        favorites : filtered,
                    }

                default : 
                    return state;
        }
    }
export default favoriteReducer;