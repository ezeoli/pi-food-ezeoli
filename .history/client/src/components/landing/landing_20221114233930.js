import React from "react";
import { Link } from "react-router-dom";
import styles from '../landing/Landing.module.css';

export default function LandingPage(){
    return (
        <div className={styles.landing}>
        
            <h1 className={styles.wlc}>The Best recipes </h1>
            <Link to= '/recipes'> 
            <button className={styles.btn}>ENTER</button>
            </Link>
        </div>
       
    )
}