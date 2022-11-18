import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes , filterRecipes, sortRecipes,filterOrigin} from "../../redux/actions";


import Card from "../card/Card";


import styles from './Home.module.css'



export default function Home (){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes )
    const diets = useSelector(state=>state.diets)
    const allRecipes = useSelector(state => state.recipes)
    const notFound = useSelector(state => state.notFound)

    const [filter,setFilter]=useState('')
    const [sort, setSort] = useState('')
    const [filterO, setFilterO] = useState('')
    const[currentPage,setCurrentPage] =useState(1)                                             
    const[recipesPerPage,setrecipesPerPage]=useState(9)                             
    const indexLastRecipe = currentPage * recipesPerPage                            
    const indexFirstRecipe = indexLastRecipe - recipesPerPage                       
    const currentRecipes = allRecipes.slice(indexFirstRecipe,indexLastRecipe)
    
    function handleOnClick(e){
    e.preventDefault();
    dispatch(getRecipes())  
    }

    function handleFilterDiet(e) {
        e.preventDefault()
        dispatch(filterRecipes(e.target.value))
        setCurrentPage(1)
        setIsActive(1)
        setFilter(e.target.value)
    }
    
    function handleSort (e){
        e.preventDefault()
        dispatch(sortRecipes(e.target.value))
        setCurrentPage(1)
        setIsActive(1)
        setOrder("Order" + e.target.value);
        setSort(e.target.value)  
    }
    function handleFilterOrigin(e){
        e.preventDefault()
        setFilterO(e.target.value)
        dispatch(filterOrigin(e.target.value))
        setCurrentPage(1)
        setIsActive(1)
    }    

    useEffect(() => {
        dispatch(getRecipes())  
    },[dispatch]);

    console.log(allRecipes);
    return (
       

     <div className={styles.bkg}>
        <div className={styles.cards}>
            <button onClick = {e => handleOnClick(e)} className={styles.refresh}> Clear Filters</button>
            <select name="" id="" value={sort} className={styles.filter} onChange={e=>handleSort(e)}>
                <option hidden> Sort recipes</option>
                <option value='asc'>Ascendant A-Z</option>
                <option value='desc'>Descendant Z-A</option>
                <option value='ascH'>Ascendant HealthScore</option>
                <option value='descH'>Descendant HealthScore</option>
            </select>
            <select name="" id="" className={styles.filter} value={filter} onChange={e=>handleFilterDiet(e)}>
                <option hidden> Filter by diet </option>
                <option value='default' >All</option>
                {diets.length>0 && diets.map((diet) => {return <option key = {diet.id}value={diet.name}>{diet.name}</option>})}
            </select>
            <select value={filterO} onChange={e=>handleFilterOrigin(e)} className={styles.filter} >
                <option hidden> Filter by origin </option>
                <option value='default' >All</option>
                <option value='db' >Created</option>
            </select> 
        </div>    
        <div className={styles.cards}>
                
            {allRecipes&&allRecipes.map( e => {
                return (  
                    <Link to={'/recipes/' + e.id}>
                    <Card name={e.name} image={e.image} 
                    diets={e.diets} 
                    key={e.id}/>  
                    </Link>
                    )  
                })  
            }   
         </div>
        </div>  
       

                 
    )     
}   