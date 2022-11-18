import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../redux/actions";


import Card from "../card/Card";


import styles from './Home.module.css'



export default function Home (){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes )
    
function handleOnClick(e){
    e.preventDefault();
    dispatch(getRecipes())  
    }
    const [filter,setFilter]=useState('')
    const [sort, setSort] = useState('')
    const [filterO, setFilterO] = useState('')
    
    function handleFilterDiet(e) {
        e.preventDefault()
        dispatch(filterRecipes(e.target.value))
        setCurrentPage(1)
        setIsActive(1)
        setFilter(e.target.value)
    }
    
    function handleSort (e){
        e.preventDefault()
        dispatch(sortRecipes(e.target.value))
        setCurrentPage(1)
        setIsActive(1)
        setOrder("Order" + e.target.value);
        setSort(e.target.value)  
    }
    function handleFilterOrigin(e){
        e.preventDefault()
        setFilterO(e.target.value)
        dispatch(filterOrigin(e.target.value))
        setCurrentPage(1)
        setIsActive(1)
    }    

    useEffect(() => {
        dispatch(getRecipes())  
    },[dispatch]);

    console.log(allRecipes);
    return (
       

     <div className={styles.bkg}>
        <div className={styles.cards}>
            <button onClick = {e => handleOnClick(e)} className={styles.refresh}> Clear Filters</button> 
            </div>    
        <div className={styles.cards}>
                
            {allRecipes&&allRecipes.map( e => {
                return (  
                    <Link to={'/recipes/' + e.id}>
                    <Card name={e.name} image={e.image} 
                    diets={e.diets} 
                    key={e.id}/>  
                    </Link>
                    )  
                })  
            }   
         </div>
        </div>  
       

                 
    )     
}   