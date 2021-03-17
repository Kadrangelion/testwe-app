import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageContainer } from '../../styles/global';

const Char = () => {
  const location = useLocation();
  const [char, setChar] = useState({});

  useEffect(() => {
    if(location.state){
      setChar(location.state.character);
    }
  }, [location]);

  return (
    <PageContainer>
      <h2>{char.name}</h2>
      <div>{char.gender}</div>
      <div>{char.died}</div>
      <div>{char.titles}</div>
    </PageContainer>
  )
}

export default Char;