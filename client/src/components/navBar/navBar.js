import React, { useEffect , useState} from 'react';

import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import styles from './NavBar.module.css';

import {getRecipes} from '../../redux/actions/index'





export default function Navbar() {
    const [show, setShow] = useState('')
    useEffect(() => {}, [show])


    return (
        <header className={styles.headerContainer}>
            <p className={styles.headerLogo} >The Best Recipes App</p>
            <SearchBar setShow={setShow} />
            <Link to='/recipes'><button className={styles.headerCreate} >Create recipe</button></Link>
            

        </header>
    )
};