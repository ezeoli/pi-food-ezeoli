import React from "react";
import { Link } from "react-router-dom";
import styles from '../landing/Landing.module.css';

export default function LandingPage(){
    return (
        <div className={styles.landing}>
        
            <h1 className={styles.wlc}>The Best Recipes </h1>
            <Link to= '/home'> 
            <button className={styles.btn}>ENJOY</button>
            </Link>
        </div>
       
    )
}