import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  padding: 2.5rem 1rem;

  background-color: var(--Dark-Blue);
  color: var(--White);
  font-weight: 500;

  div{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    h3{
      font-size: 1rem;
      font-weight: 500;
      margin-right: auto;
    }
    p{  
      margin-right: 0.5rem;
    }
    span{
      font-size: 0.9rem;
    }
  }

`