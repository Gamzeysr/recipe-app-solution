import React from "react";
import {
  LoginContainer,
  StyledImg,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
//👆 Burada stillendirdiğim her bir dosyamı cagırmış oldum 
import { useNavigate } from "react-router-dom"
//👆burada useNavigate Hookunu kullanarak gitmesni istediğimiz yere yönlendiriyoruz. 
// oyüzden usenavigate hookunu reactrouterdomdan import ettik 
import meal from "../../assets/meal.svg";
const Login = () => {

  const navigate = useNavigate();

  const userInfo = {
    username: "admin"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    // 👆Bunu user var mı yokmu onu bilmek için yaptık 
    navigate(-1)
    // 👆Burada navigate yaparak bir önceki sayfama yönlendrdim.
    // Buradaki navigate(-1) in calısması useNavigate i buraya cagırarak bunu sağladık 
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        {/*👆 StyledImg mı aldım bburaya ilk önce cünkü resimde ,ilk üste o var */}
        <Header>{"<CW/>"}Recipe</Header>
        {/*👆 İknci olarakda baslıgım oldugu için baslıgı yani headrer i aldım  */}
        <StyledForm onSubmit={handleSubmit}>
          {/* 👆buradada formuma tıklayınca yönlendirme yapacagımdan handleSubmit imi kullandım  */}
          <StyledInput placeholder="Enter username" type="text" />
          <StyledInput placeholder="Enter Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
