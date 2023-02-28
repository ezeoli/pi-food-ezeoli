 import React , {useState} from "react";

 import { useDispatch } from "react-redux";
 import {getRecipesByName} from '../../redux/actions/index';
 
import styles from './SearchBar.module.css'

 export default  function SearchBar () {
     const dispatch = useDispatch() 
     
     const[search,setSearch] =useState('') 

     function handleSubmit (e){
         e.preventDefault(e)
         if (!search) alert("You must enter a name");
         dispatch(getRecipesByName(search))
          
        return setSearch('')
        
       
      } 
      function handleInputName (e){
        return setSearch(e.target.value)
      }
      
      return (
     <div>
        <div className={styles.search}>
         <form onSubmit={(e) => {handleSubmit(e)}}>
         <h2>Search your recipe</h2>
         <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}}></input>
         <button  type='submit' className={styles.btnsearch} >Search</button>
        </form>

     </div>
         
     </div>

      )
 }