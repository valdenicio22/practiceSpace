import React from 'react';
import * as S from './style'

export const CardItem = () => {
  return (
    <S.WrapperCardItem>
      <div className="cardContainer">
        <img className="cardImg" src="" alt=""/>
        <div className="cardInfo">
          <h2>Germany</h2>

          <h3>Population: <span>81.770.900</span></h3>
          <h3>Region: <span>Europe</span></h3>
          <h3>Capital: <span>Berlin</span></h3>
        </div>
      </div>
    </S.WrapperCardItem>
  );
}