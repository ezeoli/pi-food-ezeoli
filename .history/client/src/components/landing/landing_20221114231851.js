import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';

export default function LandingPage(){
    return (
        <div className={styles.landing}>
        
            <h1 className={styles.wlc}>Bienvenido</h1>
            <Link to= '/recipes'> 
            <button className={styles.btn}>Entrar</button>
            </Link>
        </div>
       
    )
}