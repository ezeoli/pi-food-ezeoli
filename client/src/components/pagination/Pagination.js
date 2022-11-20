import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({recipesPerPage, pagination, allRecipes, setIsActive, isActive, currentPage}) {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(allRecipes/recipesPerPage)+1; i++) {
        pageNumbers.push(i);
    }
     // eslint-disable-next-line
    
    const handleClick = (number) => {
        pagination(number)
        setIsActive(number)
    }
    return (
        <div className={styles.pageContainer}>
            <ul className={styles.pagesList} >
                {(currentPage > 1)&&<li className={ styles.itemList} onClick={currentPage > 1 ? ()=>handleClick(currentPage-1):null}>Prev</li>}
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className={(isActive=== number) ? styles.active: styles.itemList } onClick={() => handleClick(number)}>
                                {number}
                        </li>
                    )
                })}
                { (currentPage < (pageNumbers.length)) && <li className={ styles.itemList} onClick={currentPage < (pageNumbers.length) ? ()=>handleClick(currentPage+1):null}>Next</li>} 
            </ul>
        </div>
    )
}