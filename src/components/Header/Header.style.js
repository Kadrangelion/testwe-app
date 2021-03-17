import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  height: 5vh;
  align-items: center;
  justify-content: center;
  background-color: grey;
  color: white;
`

export const HeaderReturn = styled.div`
  width: fit-content;
  margin-right: 2rem;
  &:hover{
    border-bottom: 1px solid orange;
    color: orange;
    cursor: pointer;
  }
`

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
`
