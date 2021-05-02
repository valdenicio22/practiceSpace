import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 375px;

  @media(min-width: 376px){
    width: 100%;
  }
`
export const Container = styled.div`
  padding: 2rem 1rem;

  /* display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto; */

  .inputSelectContainer{

    display: flex;
    flex-flow: column nowrap;
    
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

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
` 