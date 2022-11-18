import React from 'react'
import styles from './Loading.module.css'
import img from '../../icons/loading.gif'

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
        <div className={styles.loader}>
            <img src={img} alt="" />
        </div>
    </div>
  )
}