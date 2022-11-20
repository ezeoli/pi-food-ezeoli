import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes ,getDiets,resetRecipes, filterRecipes, sortRecipes,filterOrigin} from "../../redux/actions";


import Card from "../card/Card";
import Pagination from '../pagination/Pagination';
import Loading from '../loading/Loading';
import styles from './Home.module.css';



export default function Home (){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes )
    const diets = useSelector(state=>state.diets)
    const notFound = useSelector(state => state.notFound)

    const [filter,setFilter]=useState('')
    const [sort, setSort] = useState('')
    const [filterO, setFilterO] = useState('')
    const[currentPage,setCurrentPage] =useState(1)                                             
    const[recipesPerPage,setrecipesPerPage]=useState(9)
    const [order, setOrder] = useState("");
    const [isActive,setIsActive] = useState(1) 
                               
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
    
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets()) 
        return ()=>{
            dispatch(resetRecipes())
        } 
    },[dispatch]);

    console.log(diets);
    return (
       

     <div className={styles.bkg}>
        <div className={styles.filterContainer}>
            <button onClick = {e => handleOnClick(e)} className={styles.filter}> Reset Filters</button>
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
                <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian </option>
                    <option value="lacto-vegetarian">Lacto-Vegetarian </option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
            </select>
            <select value={filterO} onChange={e=>handleFilterOrigin(e)} className={styles.filter} >
                <option hidden> Filter by origin </option>
                <option value='default' >All</option>
                <option value='db' >Created</option>
            </select> 
        </div>    
     <div className={styles.pagination} >
        <Pagination
                            recipesPerPage={recipesPerPage}
                            allRecipes={allRecipes.length}
                            pagination={pagination}
                            setCurrentPage={setCurrentPage}
                            setIsActive={setIsActive}
                            isActive={isActive}
                            currentPage={currentPage}
                            />
        </div>   
        
        
        <div className={styles.cards}>
                
            {currentRecipes?currentRecipes.map( e => {
                return (  
                    <Link to={'/recipes/' + e.id}>
                    <Card name={e.name} image={e.image} 
                    diets={e.diets} healthScore={e.healthScore}
                    key={e.id}/>  
                    </Link>
                    )  
                })  : <Loading/>
            }   
         </div>
        </div>  
       

                 
    )     
}   