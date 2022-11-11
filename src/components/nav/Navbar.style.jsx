import styled from "styled-components";

import { Link } from "react-router-dom";
import { Flex } from "../globalStyles/Flex.style";

const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;

export const Brand = styled(Link)`
/* Linkimi recat router domdan import ediyorum  */
/* ve düzenlemeyi burada yapıyorum 👇 */
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  /*👆 themecolorsdan benim logoColormu al diyorum  */
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
// Brandın styledini yaoıyoruz burada 
// BU BRand dediğimiz ayrı component menu dediğimiz ayrı component, menuLink dediğimiz ayrı bır component bunları bu sekilde düşün!!

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction:column;
    width: 100%;
    max-height: ${({isOpen})=>(isOpen ? "400px" : "0")};
    overflow: hidden;

  }
`;
// bu menu içinayrı bir component 👆
// overflow:hidden; i about ları home  register logout sayfalarını gizlesin ekrandan diye verdik 

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
export default Nav;
// media quary de ekranı aldık . büyüdüğü zaman hamburger menu görünmeyecek bunu ayarladık 
// Hamburger butonuna media koyduk çünkü küçlünce görünsün istiyoruz
