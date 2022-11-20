import React, {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import {getDiets , postRecipes} from '../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import styles from './CreateRecipe.module.css'




export default function CreateRecipe() {
    const dispatch = useDispatch()
    const listDiets = useSelector((state) => state.diets )
    const [errors,setErrors]=useState({})      // este estado local es para, las validaciones(del formulario controlado)
    const [input,setInput] = useState({
        name :'',
        resume:'',
        healthScore:0,
        howTomake:'',
        diets:[]
    })

    function controlForm (input){
    const reg = new RegExp('^[0-9]+$');
    let errors = {}
    if(!input.name) errors.name= 'Please put the title of the recipe'
    if(!input.resume) errors.resume= 'Please put the resume of the recipe'
    if(input.healthScore<0 || input.healthScore>100 )  errors.healthScore='Put a healthScore between 0-100'
    
    return errors
    }
    // console.log(input);
    useEffect(() => {
        dispatch(getDiets())
        },[dispatch])
 
        function handleChange(e){
        setInput({
            ...input,
    [e.target.name] : e.target.value})
        setErrors(controlForm({
            ...input,
            [e.target.name] : e.target.value    // me copio todo lo que venga del formulario , en el caso de que en alguno
        }))                               // no cumpla con las validaciones, se va a poner un texto advirtiendo
    }

function handleSelect(e){
    setInput({
        ...input,
        diets:[...input.diets, e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    dispatch(postRecipes(input))
    alert('Congratulations, The new recipe has been created!')
    setInput({
        name :'',
        resume:'',
        healthScore:0 ,
        image:'',
        howToMake:'',
        diets:[]
    })
}
function handleDelete(e){
    setInput({
        ...input,
        diets: input.diets.filter(diet => diet !== e )
    }) //este es para borrar algun tipe diet que haya elegido, va a crear un nuevo array con todos los que no sean
}//    el elemento que le hice click

    return (
        <div className={styles.bkg}>
        <div className={styles.container}>
            <Link to ='/home' ><button className={styles.btn}>Return Home</button></Link>
            <h1 className={styles.h1}>Create your recipe</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                <div>
                    <label>Name:</label>
                    <input
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={(e) => {handleChange(e)}}
                    />
                    { errors.name && (
                        <p className={styles.error}>{errors.name}</p>
                    ) }
                </div>
                <div>
                    <label>Resume:</label>
                    <input
                    type='text'
                    name='resume'
                    value={input.resume}
                    onChange={(e) => {handleChange(e)}} 
                    />
                    { errors.resume && (
                        <p className={styles.error}>{errors.resume}</p>
                    ) }
                </div>
                <div>
                    <label>Image</label>
                    <input
                    type='text'
                    name='image'
                    value={input.image}
                    onChange={(e) => {handleChange(e)}} 
                    />
                    { errors.image && (
                        <p className={styles.error}>{errors.image}</p>
                    ) }
                </div>
                <div>
                    <label>HealthScore:</label>
                    <input
                    type='text'
                    name='healthScore'
                    value={input.healthScore}
                    onChange={(e) => {handleChange(e)}} 
                    />
                     { errors.healthScore && (
                        <p className={styles.error}>{errors.healthScore}</p>
                    ) }
                </div>
                <div>
                    <label>How to make:</label>
                    <input
                    type='text'
                    name='howToMake'
                    value={input.howToMake}
                    onChange={(e) => {handleChange(e)}} 
                    />
                </div>
                <select onChange={(e) => handleSelect(e)} className={styles.select} >
                    {listDiets.map((t) => {
                    
                    return <option value={t}> {t} </option>
                    
                    })}
                    
                </select >
                {errors.hasOwnProperty('name') || errors.hasOwnProperty('resume') || errors.hasOwnProperty('image') || errors.hasOwnProperty('healthScore')?  <p className={styles.adv}> Please complete all the inputs in order to create your recipe</p> : <button disabled={input.name  && input.resume ? false : true} type='submit' className={!input.name && !input.resume ? styles.correct : styles.incorrect}> Create It</button> }
               
            </form>
            
            {input.diets.map(e => {
               return(
               <div >
                    <h5 className={styles.types}>{e}</h5>
                    <button className={styles.btnx} onClick={() => handleDelete(e)}>X</button>
                   
                </div>
            )})}
        </div>
        </div>
    )

}