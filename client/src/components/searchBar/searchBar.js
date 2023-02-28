 import React , {useState} from "react";
 import Swal from "sweetalert2";
 import { useDispatch } from "react-redux";
 import {getRecipesByName} from '../../redux/actions/index';
 import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css'

 export default  function SearchBar () {
     const dispatch = useDispatch() 
     
     const[search,setSearch] =useState('') 
     
     const alertNoFound = () => {
      Swal.fire({
        title: `You must enter a recipe`,
        text: "Please,try enter a recipe",
        icon: "info",
        confirmButtonText: "Ok",
      })  }; 

     function handleSubmit (e){
         e.preventDefault(e)
         if (!search) alertNoFound();
         dispatch(getRecipesByName(search))
          
        return setSearch('')
        
       
      } 
      function handleInputName (e){
        return setSearch(e.target.value)
      }
      
      return (
     <div>
        <div className={styles.search}>
         <form onClick={(e) => {handleSubmit(e)}}>
         <h2>Search your recipe</h2>
         <FiSearch />
         <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}}></input>
         
        </form>

     </div>
         
     </div>

      )
 }