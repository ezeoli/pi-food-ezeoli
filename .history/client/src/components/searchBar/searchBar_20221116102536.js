 import React from "react";

 import { useDispatch } from "react-redux";
 import {getRecipesByName} from '../../redux/actions/index';
 
import styles from './SearchBar.module.css'

 export default async function SearchBar ({search , setSearch}) {
     const dispatch = useDispatch() 
    
     function handleSubmit (e){
         e.preventDefault(e)
         dispatch(getRecipesByName())
        return setSearch('')
        
      } 
      function handleInputName (e){
        return setSearch(e.target.value)
      }

      return (
     <div>
        <div className={styles.search}>
         <form onSubmit={(e) => {handleSubmit(e)}}>
         <h2>search your recipe</h2>
         <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}}></input>
         <button  type='submit' className={styles.btnsearch}>Search</button>
        </form>

     </div>
         
     </div>

      )
 }