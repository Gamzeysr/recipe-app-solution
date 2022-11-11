import styled from 'styled-components';
import { Flex } from '../../components/globalStyles/Flex.style';

import Home from './Home';

export const HeaderContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.mainColor};
  flex-direction: column;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: #e1f1dd;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;

export const ImgDiv = styled.div`
  display:flex;
  justify-content:center;
  margin:1.5rem;
  `;

export const HomeImg = styled.img`
  width:80%;
  max-width:750px;
  `;
//!✨ ImgDiv i ve HomeImg ikiside resim şimdi bunları Home.jsx de kullancaz  

export const HeaderText = styled.h1`
    font-size: 2.5rem;
    color: red;
    text-align: center;
  `;

// Bu export hizasındaki sarı isimlerş her birini component olarak düşün 👆