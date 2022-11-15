import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../redux/actions";

import Card from "../card/card";

import styles from './Home.module.css'


export default function Home (){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes )

    console.log(allRecipes);

    useEffect(() => {
        dispatch(getRecipes())  
    },[dispatch]);

    
    return (

        <div>
            { <div className={styles.bkg}>
                <div className={styles.filtrus}>
                  <div className={styles.search}> 
            {
            allRecipes?.map( e => {
                return ( <div className={styles.cards}>
                    
                    <Link to={'/recipes'}>
                    <Card name={e.name} img={e.img} 
                    typeDiets={e.typeDiets} 
                    key={e.id}/>
                    </Link>
                    </div>
                    )  
                })  
            }   
             </div>
        </div>
    </div>     
            }    
            
            

        </div>
    )
      
        