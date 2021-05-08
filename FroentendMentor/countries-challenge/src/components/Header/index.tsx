import React from 'react'
import styles from './style.module.scss'

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <ul>
          <li>Where in the world?</li>
          <li>Icon</li>
          <li>Dark Mode</li>
        </ul>
      </div>
    </header>
  )
}