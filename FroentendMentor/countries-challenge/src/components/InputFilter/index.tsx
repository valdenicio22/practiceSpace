import React from 'react'
import styles from './style.module.scss'

export const InputFilter = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Search for a country..."/>
      <select name="Filter by Region" id="regions">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}