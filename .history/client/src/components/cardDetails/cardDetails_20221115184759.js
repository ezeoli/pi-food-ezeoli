import React from "react";
import { useDispatch,useSelector} from 'react-redux';
import styles from './CardDetail.module.css'
import { Link } from "react-router-dom";
import { getRecipeDetail } from "../../redux/actions";
import { useEffect, useState } from "react";


const RecipeDetail = ({match}) => {

    let dispatch = useDispatch()
    let productId = match.params.id;
    let p = useSelector((state) =>state.detail)
    //const p= useSelector(state => state.characterDetail.find(productId));
  
     // useSelector(state => console.log(state))
  
      React.useEffect(()=> {dispatch(getRecipeDetail(productId))},[]);
  
    return (
      <div>
           <li>{p.name}</li>
          <li>{p.resume}</li>
          <li>{p.healthScore}</li>
          <li>{p.race}</li>
          <li><img src={p.image} alt={p.name} /></li>
          <li>{p.ship.name}</li>
          <li><img src={p.ship.image} alt={p.ship.name} /></li>
        
  
      </div>
    );
  };
  
  
  export default CharacterDetail;