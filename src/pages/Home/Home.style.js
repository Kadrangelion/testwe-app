import styled from 'styled-components';

export const BookItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 10px;
  height: 150px;
  transition: all 1s;
  align-items: center;
  padding: 1rem;
  &:hover{
    background-color: lightgrey;
    border-color: orange;
  }
`;

export const BookInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  & div:first-child{
    text-align:center;
    font-weight: bold;
    font-size: 16px;
  }
  & > div{
    padding: 0.2rem;
  }
`;

export const Link = styled.div`
  color: blue;
  &:hover{
    color: orange;
    text-decoration: underline;
    cursor: pointer;
  }
`;