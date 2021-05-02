import React from 'react'
import { CardItem } from '../CardItem'
import { Header } from '../Header'

import * as S from './style'


export const Main = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <div className="inputSelectContainer">
          <input type="text" placeholder="Search for a country..." />
          <select name="" id="">
            <option value="Africa">Africa</option>
            <option value="America">Africa</option>
            <option value="Asia">Africa</option>
            <option value="Europe">Africa</option>
            <option value="Oceania">Africa</option>
          </select>
        </div>
        <S.cardsContainer>
          <CardItem />
        </S.cardsContainer>
      </S.Container>
    </S.Wrapper>
  );
}