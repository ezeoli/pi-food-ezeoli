import { GET_RECIPES } from "../actions";
import { GET_DETAILS } from "../actions";
import { GET_BY_NAME } from "../actions";

export const initialState = {
    recipes: [],
    allRecipes : [],
    details : [],
    typediets :[]
}

function rootReducer (state=initialState, action) {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload, 
                
                
            }

        case GET_DETAILS:
            return {
                ...state,
                details: action.payload,
            }  
         
        case GET_BY_NAME:
        return {
            ...state,
            recipes: action.payload,
        }      

            default:
                return state;
        }
    }

export default rootReducer;    
