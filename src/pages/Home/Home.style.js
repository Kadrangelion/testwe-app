import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const BookItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  border-radius: 3px;
  border: 1px solid black;
  cursor: pointer;
  margin-top: 10px;
  height: 150px;
  transition: all 1s;
  align-items: center;
  &:hover{
    height: 200px;
    width: 550px;
    background-color: lightgrey;
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