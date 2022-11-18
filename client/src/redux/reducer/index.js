import { GET_RECIPES } from "../actions";
import { GET_DETAILS } from "../actions";
import { GET_BY_NAME } from "../actions";
import {RESET_DETAIL} from "../actions";

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
        case RESET_DETAIL:
             return{
        ...state,
        details: [''],
        notFound:''
        }    
            default:
                return state;
        }
    }

export default rootReducer;    
