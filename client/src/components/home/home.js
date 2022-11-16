import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../redux/actions";


import Card from "../card/card";
import NavBar from "../navBar/navBar";

import styles from './Home.module.css'


export default function Home (){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes )

    

    useEffect(() => {
        dispatch(getRecipes())  
    },[dispatch]);

    console.log(allRecipes);
    return (
       

     <div className={styles.bkg}>
             
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