 import React , {useState} from "react";

 import { useDispatch } from "react-redux";
 import {getRecipesByName,resetDetail} from '../../redux/actions/index';
 
import styles from './SearchBar.module.css'

 export default  function SearchBar ({setShow}) {
     const dispatch = useDispatch() 
     
     const[search,setSearch] =useState('') 

     function handleSubmit (e){
         e.preventDefault(e)
         dispatch(getRecipesByName(search))
         
        return setSearch('')
        setShow('')
        dispatch(resetDetail)
      } 
      function handleInputName (e){
        return setSearch(e.target.value)
      }
      function reset(){
        setShow('cargado')
      }
  
      return (
     <div>
        <div className={styles.search}>
         <form onSubmit={(e) => {handleSubmit(e)}}>
         <h2>Search your recipe</h2>
         <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}}></input>
         <button  type='submit' className={styles.btnsearch} onClick={reset}>Search</button>
        </form>

     </div>
         
     </div>

      )
 }