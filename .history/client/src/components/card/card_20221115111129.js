import React from "react";
import styles from './Card.module.css'


export default function Card ({name , image , typeDiets ,  id}) {
 // <div className={styles.tipes}>{typeDiets.map(t => <h5>✔️{t.name} .</h5>)}  </div>  
return (
    <div key = {id} className={styles.card}>
        <div className={styles.cd}>
        <h3>{name}</h3>
        <img  className={styles.cardimg} src = { image? image:'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg' } alt ='img not found' width='200px'  height='250px'/>   
        
        </div>
    </div>
)
}