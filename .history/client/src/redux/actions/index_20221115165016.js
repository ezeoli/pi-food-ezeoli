import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_DETAILS = 'GET_DETAILS';

export function getRecipes(){
    return async function(dispatch){
        const json = await axios.get(`http://localhost:3001/recipes`);
        return dispatch({
            type : GET_RECIPES,
            payload: json.data
        })
    }
}

export const getRecipeDetail = (id) => async dispatch => {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);
    
    return dispatch({ type: GET_DETAILS, payload: response });
};