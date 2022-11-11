// import Home from "../../pages/home/Home";
import React from "react";
import "./Header.style";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";
// ☝header style in içinde hangi componentleri kullanacaksam onları burada import ediyorum.
// 👆 Bunlar Home.style.jsx dekiler. 

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  // ☝ home da ki kullanacak oldugum verileri burada yakaladım .Home da gönderdim
  const handleSubmit = (e) => {
    e.preventDefault();
    getData()
  }

  return (
    <HeaderContainer>
      <MainHeader>RECİPE APP</MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        {/* 👆 search a basıldıgında verilerim gelsin istediğim için handleSubmit i kullandık  Bunun için home da ki useefectleri kaldırdık. */}
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType?.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};
export default Header;
// Buradaki componentte verileri alıyoruz inşa ettiğmiz buttonların içine verileri koyuyoruz
 
// Map fonk yaptıgım yerlerde ? varsa anlamına gelen seyi koymalıyım ki program hata almadan devam etsin 