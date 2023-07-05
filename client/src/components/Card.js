import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../components/Card.css'

const CardWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

const BorderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  margin: 0;
  padding: 0;
`;

const PowerIndicator = styled.div`
  position: absolute;
  top: 110px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  color: black; 
  font-weight: bold;
  font-size: 12px;
  border: 2px solid yellow;
`;

const Card = ({ card }) => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(
          `https://api.gwent.one/?key=data&id=${card.card}&response=html&html=version.linkname.ability.flavor.artist&version=1.0.0.15`
        );
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, []);

  useEffect(() => {
    console.log('Card data:', cardData);
  }, [cardData]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  const parseCardData = (data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const cardElement = doc.querySelector('.G1-card');

    if (cardElement) {
      const imageElement = cardElement.querySelector('.G1-cardart img:first-child');
      const borderElement = cardElement.querySelector('.G1-cardart img:nth-child(2)');

      const imageUrl = imageElement ? imageElement.src : '';
      const borderImageUrl = borderElement ? borderElement.src : '';

      return { imageUrl, borderImageUrl };
    } else {
      console.error('Failed to parse card data:', data);
      return { imageUrl: '', borderImageUrl: '' };
    }
  };

  const { imageUrl, borderImageUrl } = parseCardData(cardData);

  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt="Card" />
      <BorderImage src={borderImageUrl} alt="Card Border" />
      <PowerIndicator>{card.power}</PowerIndicator>
    </CardWrapper>
  );
};

export default Card;
