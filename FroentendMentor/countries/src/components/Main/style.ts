import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 375px;

  @media(min-width: 376px){
    width: 100%;
  }
`
export const Container = styled.div`
  width: 90%;
  height: 90%;

  margin: 1.5rem auto 0;
  border: 1px solid black;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  


  .inputSelectContainer{
    input{
      width: 100%;
      padding: 1rem;
      margin-bottom: 1.5rem;

      border-radius: 0.5rem;
    }
    select{
      width: 50%;
      padding: 0.7rem;

      border-radius: 0.5rem;
    }
  }
`

export const cardsContainer = styled.div`

  width: 90%;
  margin: 1.5rem auto;

  @media(min-width: 376px){
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  flex-flow: row wrap;
` 