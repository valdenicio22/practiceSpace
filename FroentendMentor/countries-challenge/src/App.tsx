import React from 'react'
import { CardCountry } from './components/CardCountry'
import { Header } from './components/Header'
import { InputFilter } from './components/InputFilter'
import styles from './styles/app.module.scss'
import { api } from './service/api'

type Countries = {
  numericCode: string,
  flag: string,
  name: string,
  region: string,
  capital: string,
  population: number,
}

function App() {

  const [countries, setCountries] = React.useState<Countries[]>([]);

  React.useEffect(() => {
    api.get(`/all`)
    .then(response => {
      const dataCountries = response.data
      console.log(dataCountries)
      setCountries(dataCountries)
    })
  }, [])

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <InputFilter />
        <div className={styles.cardContainer}>
          <div className={styles.cardGrid}>
          {countries && countries.map(country => (
            <CardCountry key={country.numericCode} {...country} />
          ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
