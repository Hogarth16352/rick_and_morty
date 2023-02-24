import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
position: relative;
`


const Image = styled.img`
   width: 300px;
   height: auto;
   margin: 12px;
   border-radius: 50%;
   margin-bottom: 20px;
`

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  width: 100%;
  padding: 18px;
  box-sizing: border-box;
  margin: 0px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 16px;

  &:hover {
   color: #f08d49;
 }
`

const Subtitle = styled.h3`
  margin: 0;
  font-size: 14px;
`

const Button = styled.button`
  background-color: #51eaea;
  color: #000000;
  border: 0;
  border-radius: 25px;
  padding: 1px 16px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f1dfbf;
    color: #000000;
    transform: scale(1.13);
  }
`

export default function Card(props) {   return (
      <CardStyle>
        <hr />
         <Image  src={props.image} alt={props.name} />
         <TextContainer>
         <Button onClick={props.onClose}>X</Button>
         <Title>{props.name}</Title>
         <Subtitle>{props.species}</Subtitle>
         <Subtitle>{props.gender}</Subtitle>
         </TextContainer>
         <hr />
      </CardStyle>
   );
}