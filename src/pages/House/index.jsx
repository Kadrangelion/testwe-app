import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { house } from '../../services';
import { PageContainer } from '../../styles/global';

const CharList = () => {
  const { id } = useParams();
  const [houseInfo, setHouseInfo] = useState({});

  useEffect(() => {
    house.getHouse(id).then(response => setHouseInfo(response))
  }, [id]);

  return (
    <PageContainer>
      <h2>{houseInfo.name}</h2>
      <div>{houseInfo.region}</div>
      <div>{houseInfo.coatOfArms}</div>
      <div>{houseInfo.words}</div>
    </PageContainer>
  )
}

export default CharList;