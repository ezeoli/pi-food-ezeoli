import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const RESET_DETAIL = 'RESET_DETAIL';
export const FILTER_RECIPES = 'FILTER_RECIPES';
export const FILTER_ORIGIN = 'FILTER_ORIGIN';
export const SORT_RECIPES = 'SORT_RECIPES';
export const GET_DIETS = 'GET_DIETS';
export const RESET_RECIPES = 'RESET_RECIPES';
export const POST_RECIPE = 'POST_RECIPE';


export const getRecipes = () => async dispatch => {
        const json = await axios.get(`http://localhost:3001/recipes`);
        
        return dispatch({
            type : GET_RECIPES,
            payload: json.data
        })
    }


export const getRecipeDetail = (id) => async dispatch => {
    const json = await axios.get(`http://localhost:3001/recipes/${id}`);
    
    return dispatch({ 
        type: GET_DETAILS, 
        payload: json.data 
    });
};

export const getRecipesByName = (name) => async dispatch =>{
    
    const json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
    
    return dispatch( {
        type : GET_BY_NAME,
        payload: json.data
    })
};
export const getDiets = () => async dispatch =>{
    
            const json = await axios.get('http://localhost:3001/diets');
            return dispatch({
                type: GET_DIETS,
                payload: json.data
            })      
};

export function resetDetail (){
    return{
        type: RESET_DETAIL
    }
};
export function filterRecipes(payload) {
    
    return {
        type: FILTER_RECIPES,
        payload
    }

};
export function filterOrigin(payload){
    return {
        type: FILTER_ORIGIN,
        payload
    }
};


export function sortRecipes(payload){
    return{
        type: SORT_RECIPES,
        payload
    }
};

export function resetRecipes(){
    return{
        type: RESET_RECIPES
    }
};

export function postRecipes (payload){
    return async function(dispatch){
        var json = await axios.post(`http://localhost:3001/recipes`,payload);
        return  dispatch({
            type: POST_RECIPE,
            json
            
        }) 
    }

}