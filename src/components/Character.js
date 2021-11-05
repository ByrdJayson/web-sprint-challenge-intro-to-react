// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  width: 100%;
  color: midnightblue;
`


export default function Character(props){
  const { characters } = props;

  return ( characters.map(char => {
    return <StyledDiv>
      <h1 key={char.name}>{char.name}</h1>
      <p>{char.birth_year}</p>
      <p>{char.height}</p>
      <p>{char.mass}</p>

    </StyledDiv>

  })
  )
}
