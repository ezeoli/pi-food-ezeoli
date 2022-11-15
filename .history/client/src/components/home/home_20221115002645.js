import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";

import styles from './Home.module.css'
export default function Home (){
    <div className={styles.cards}>
            { 
            currentRecipes?.map( e => {
                return (
                    
                    <Link to={'/recipes' + e.id}>
                    <Card title={e.title} img={e.img} 
                    typeDiets={e.typeDiets} 
                    key={e.id}/>
                    </Link>
                    
                    )  
                })      
            }    
            </div>
}