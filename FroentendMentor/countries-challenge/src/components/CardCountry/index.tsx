import React from 'react'
import styles from './style.module.scss'

type Countries = {
  flag: string,
  name: string,
  region: string,
  capital: string,
  population: number,
}

export const CardCountry = ({flag, name, region, capital, population}: Countries) => {

  return (
    <div className={styles.cardContainer}>
      <img src={flag} alt={name}/>
      <div className={styles.cardInfo}>
        <ul>
          <li>{name}</li>
          <li>Population: <span>{population}</span></li>
          <li>Region: <span>{region}</span></li>
          <li>Capital: <span>{capital}</span></li>
        </ul>
      </div>
    </div>
  )
}