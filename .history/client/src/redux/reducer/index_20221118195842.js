import { GET_RECIPES } from "../actions";
import { GET_DETAILS } from "../actions";
import { GET_BY_NAME } from "../actions";
import {RESET_DETAIL} from "../actions";

export const initialState = {
    recipes: [],
    allRecipes : [],
    details : [],
    diets :[],
    filtered:[],
    notFound:''
}

function rootReducer (state=initialState, action) {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload, 
                
                
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

        case "FILTER_RECIPES":
            const listedRecipes= state.allRecipes
            const recipesApi= listedRecipes.filter(recipe => !recipe.createdInDB)
            const recipesDB= listedRecipes.filter(recipe => recipe.createdInDB)
            const filteredDB = recipesDB.filter(recipe => recipe.diets.includes(action.payload))
            const filtered = action.payload === 'default' ? listedRecipes
            return {
              ...state,
              filtered: filtered,
              recipes: filtered,
              notFound: (filtered.length===0) ? 'No se encontraron recetas' : ''
            };
        case "SORT_RECIPES":
      const sorted = state.filtered.length ? state.filtered : state.allRecipes
      if (action.payload === "asc") (sorted.sort((a,b) => a.name.localeCompare(b.name)))
      if(action.payload ==='desc') (sorted.sort((a,b) => b.name.localeCompare(a.name)))
      if(action.payload === 'ascH') {
        sorted.sort(function(a,b){
          if(a.healthScore > b.healthScore) { return 1 }
          if(b.healthScore > a.healthScore) { return -1 }
          return 0
        })
      }
      if(action.payload === 'descH') {
        sorted.sort(function(a,b){
          if(a.healthScore > b.healthScore) { return -1 }
          if(b.healthScore > a.healthScore) { return 1 }
          return 0
        })
      }
      return{
        ...state,
        recipes: sorted
        
      }    
      case 'FILTER_ORIGIN':
      const filtradasPrevias = state.filtered.length ? state.filtered : state.allRecipes      
      const filtradasDB = filtradasPrevias.filter(recipe => recipe.createdInDb)     
      if(action.payload === 'db' && filtradasDB.length ) {return ({...state, recipes:filtradasDB, notFound:''})}
      if(action.payload === 'db' && !filtradasDB.length ) {return ({...state, recipes:[], notFound:'No se encontraron recetas'})}
      return{
        ...state,
        recipes:state.allRecipes
      }
      
            default:
                return state;
        }
    }

export default rootReducer;    
