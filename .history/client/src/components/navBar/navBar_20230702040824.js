import React, { useEffect , useState} from 'react';

import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import styles from './NavBar.module.css';







export default function Navbar() {
    

    return (
        <header className={styles.headerContainer}>
            <p className={styles.headerLogo} >The Best Recipes App</p>
            <SearchBar  />
            <Link to='/recipes'><button className={styles.headerCreate} >Create recipe</button></Link>
            

        </header>
    )
};