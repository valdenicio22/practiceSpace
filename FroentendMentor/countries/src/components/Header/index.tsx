import React from 'react'
import * as S from './style'

export const Header = () => (
  <S.WrapperHeader>
    <h3>Where in the world?</h3>
    <div className="themMode">
      <p>Moon</p>
      <span>Dark Mode</span>
    </div>
  </S.WrapperHeader>
)