import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../redux/actions";

import Card from "./Card";

import styles from './Home.module.css'


export default function Home (){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes )
    
    useEffect(() => {
        dispatch(getRecipes())  
    },[dispatch]);

    <div className={styles.bkg}>
     <div className={styles.filtrus}>
     <div className={styles.search}> 
       <div className={styles.cards}>
            { 
            allRecipes?.map( e => {
                return (
                    
                    <Link to={'/recipes' + e.id}>
                    <Card name={e.name} img={e.img} 
                    typeDiets={e.typeDiets} 
                    key={e.id}/>
                    </Link>
                    
                    )  
                })      
            }    
            </div>
          </div>
        </div>
    </div>       
}