import React from "react";
import styles from './Card.module.css'


export default function Card ({name , image , diets ,  id}) {
   
return (
    <div key = {id} className={styles.card}>
        <div className={styles.cd}>
        <h3>{name}</h3>
        <img  className={styles.cardimg} src = { image? image:'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg' } alt ='img not found' width='200px'  height='250px'/>   
        <div className={styles.types}>{diets?.map(t => (<li>{t} </li>))}  </div>
        </div>
    </div>
)
}