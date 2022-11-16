import React, { useState } from "react";
import "./Navbar.style";
import Nav, { Brand, Menu, MenuLink, Hamburger } from "./Navbar.style";
// 👆 Burası navbar.style componentinde kullandıgım seyler burada da kullanacağım için import ettim.
import { GiHamburgerMenu } from "react-icons/gi"
// 👆 React icondan hamburder menuyü import ettik . 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // 👆useState i tanımladık 
  return (
    <Nav justify="space-between" wrap="wrap">
      {/*👆
       space-between vererek baslıkları iki yana yasaldım  */}
      <Brand to="/">
        <i>{"<GAMZE'S KITCHEN />"}</i>
        <span>Recipe</span>
      </Brand>
      {/*👆 Bootstrapde link e Brand deniyor o yüzden brand ile sarmalladık.Yani RECIPE in üzerine gittiğimizde tıklanabilir bir link */}

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
      {/* Buradaki GiHamburgerMenu ye tıklandıgında isOpen i true yap dedik yani tıklanınca hamburger menudeki içindekiler cıkacak default false çünkü  tıklanmayınca cıkmayacak tıklanınca true olacak o zaman meydana cıkacak */}
      {/* Bu arada Hamburger imi Navbarstyled da tanımladım component yerine geçtiği için Nabar.jsx de de cagırdım */}


      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
