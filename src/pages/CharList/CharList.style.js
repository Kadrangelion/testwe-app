import styled from 'styled-components';

export const BookContainer = styled.div`
  padding: 2rem;
`

export const CharTable = styled.table`
  margin-top: 1rem;
  border:2px solid black;
  width: 100%;
  text-align: center;
  & td {
    border:1px solid black;
  }
`

export const BookTitle = styled.h2`
  width: 100%;
  text-align: center;
`;

export const Link = styled.div`
  color: blue;
  &:hover{
    color: orange;
    text-decoration: underline;
    cursor: pointer;
  }
`;
