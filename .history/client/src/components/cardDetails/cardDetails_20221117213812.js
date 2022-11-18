import React from "react";
import { useDispatch,useSelector} from 'react-redux';
import styles from './CardDetail.module.css'
import { Link } from "react-router-dom";
import { getRecipeDetail } from "../../redux/actions";
import { useEffect, useState } from "react";


const RecipeDetail = ({match}) => {

    let dispatch = useDispatch()
    let productId = match.params.id;
    let p = useSelector((state) =>state.details)
    //const p= useSelector(state => state.characterDetail.find(productId));
  
     // useSelector(state => console.log(state))
  
      React.useEffect(()=> {dispatch(getRecipeDetail(productId))},[dispatch]);
  
    return (

      <div>
      <div className={styles.dt}> 
           <Link to='/home'><button className={styles.btn}>BACK TO HOME </button> </Link>
           <h1 className={styles.title}> {p.name} </h1>
           <div className={styles.tarjetaDeDetalles}> 
           <img className={styles.imga} src={p.image  } alt ='img not found'/>
           <div className={styles.section1}>
           <h3 className={styles.typea} ><p className={styles.TitulosDetalles}>TYPE OF DIET:</p> {p.diets&&p.diets.map(e=>{
            return(
              <p key={e.id} >
                ✔{e}
              </p> 
            )
           })}</h3>
          </div>
          <div className={styles.section2}>
           <h3 className={styles.typeb}><p className={styles.TitulosDetalles}>DISHTYPE:</p> {p.dishTypes ? p.dishTypes.map(e=>{
            return(
              <p key={e.id} >
                ✔{e}
              </p> 
            )
           }) :'dish type not found'  }</h3>
           </div>
           <div className={styles.section3}>
           <h4 className={styles.typec}><p className={styles.TitulosDetalles}>HEALTHSCORE:</p> {p.healthScore}</h4>
           
           
           
                <h5 className={styles.typed}><p className={styles.TitulosDetalles}>RESUME:</p> <div
                      dangerouslySetInnerHTML={{__html: p.resume}}
                    /></h5>
                <h5 className={styles.typee}><p className={styles.TitulosDetalles}>HOW TO MAKE IT:</p> { p.howToMake?
              p.howToMake[0].map(e=>{
              return(
              <p key={e.id} >
                <div> STEP {e.number}</div>
                
                <div> {e.step} </div>
              </p> 
            )
            
           }):""}</h5>
           </div>
          </div>
          </div>

           
       </div>
    );
  };
  
  
  export default RecipeDetail;