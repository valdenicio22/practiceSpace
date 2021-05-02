import React from 'react';
import * as S from './style'
import { api } from '../../service/api'

interface countriesInfo{
  name: string,
  flag: string,
  population: number,
  region: string,
  capital: string,
}

export const CardItem = () => {

  const [countries, setCountries] = React.useState<countriesInfo[]>([]);

  React.useEffect(() => {
    api.get('/all').then(response => {
      const countriesInfo = response.data
      // console.log(countriesInfo)
      setCountries(countriesInfo);
    })
  }, [])

//   const getCountriesInfo = async () => {
//     const response = await api.get('/all')
//     setCountries(response.data);
//  }  


  return (
    <S.WrapperCardItem>
      <div className="cardContainer">
        {countries && countries.map(countrie => (
          <div className="cardInfo">
            <h2>{countrie.name}</h2>
            <img className="cardImg" src={countrie.flag} alt=""/>
            <h3>Population: <span>{countrie.population}</span></h3>
            <h3>Region: <span>{countrie.region}</span></h3>
            <h3>Capital: <span>{countrie.capital}</span></h3>
          </div> 
        ))}
      </div>        
    </S.WrapperCardItem>
  );
}