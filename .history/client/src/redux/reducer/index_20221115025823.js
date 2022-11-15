import { GET_RECIPES } from "../actions";
 const initialState = {
    recipes: [],
    allRecipes : [],
    details : [],
    typediets :[]
}

function rootReducer (state=initialState, action) {
    switch(action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload, 
                
                
            }

            default:
                return state;
        }
    }

export default rootReducer;    
