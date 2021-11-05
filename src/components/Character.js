// Write your Character component here
import React from 'react';
import styled from 'styled-components';




const StyledContainer = styled.div`
  border: 2px solid white;
  padding-top: 2rem;
  padding-bottom: 2rem;

`


export default function Character(props){
  const { characters } = props;

  return ( characters.map(char => {
    return <StyledContainer>


          <h1>{char.name}</h1>
          {char.gender === 'n/a' ? <p>Robot</p> : <p>{char.gender}</p>}
          <p>Birth: {char.birth_year}</p>
          <p>Height: {char.height}</p>
          <p>Mass: {char.mass}</p>




    </StyledContainer>


  })
  )
}
