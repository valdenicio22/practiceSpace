import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  height: 80px;

  background-color: var(--Dark-Blue);
  color: var(--White);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1.5rem 1rem;



  h3{
    font-size: 1rem;
    font-weight: 500;
  }

  .themMode{
    
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      font-size: 0.8rem;
      font-weight: normal;
      margin-left: 0.5rem;
    }
  }
`