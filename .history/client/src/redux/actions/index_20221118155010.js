import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const RESET_DETAIL = 'RESET_DETAIL';

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

}
export function filterOrigin(payload){
    return {
        type: FILTER_ORIGIN,
        payload
    }}


export function sortRecipes(payload){
    return{
        type: SORT_RECIPES,
        payload
    }
}