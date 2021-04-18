import styled from 'styled-components';

export const WrapperCardItem = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    border: 2px solid red;

    background-color: var(--Dark-Blue);
    .cardImg{
      width: 100%;
      height: 100px;
    }
    .cardInfo{
      background-color: var(--Dark-Blue);
      color: var(--White);
      
      padding: 1.2rem 1.2rem 1.5rem;

      h2{
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }
      h3{
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.3rem;

        span{
          font-size: 0.9rem;
          font-weight: normal;
        }
      }
    }
`