import React from "react";
import { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg"
import { useNavigate } from "react-router-dom"
const Cards = ({ recipes }) => {
  //👆 recipes propunu buradan yakaladım 
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {/* Burada ki wrap="wrap" cardları genişletmeye yarıyor  */}
      {recipes?.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <Header>{recipe.label} </Header>
            <Image src={recipe.image || defaultImage} />
            {/* her yemek için bi resim koyulmamış olabilir bunun için || defaultImage dedik  */}
            {/* Yani eger o yiyceğin resmi yoksa o zaman default image i koy dedik  */}
            <Button
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })}
            // butona tıkladıgımda detaile gidecek sonrasunda bunu state propu ile recipe seklinde göndermem gerekir.replace demek yönlendirme yapmak yönlendirelen yerden ordan baska yere yönlendirmek.Böğle bi durumda history şişebilir.oyüzden benim cardın butona tıkladıgım anda historyım şişmesin diye hstory e geçen bir veriyi silmesini sağlıyoruz.
            >View More</Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;

//! onClick de useNavigate Hoookunu kullanıyorum.

// map da ? bunu kullanmamız undifined almamızı engelliyor

// Şimdi Card componentimin içindene isteniyorsa onu yapıcam 🏃
// ne isteniyor 1: ben bilgiyi yazdıgım anda veriler gelsin isyiorum.Pizza yazarsam pizzza verileiri,egg yazarsam egg ile ilgli veriler . Ozmanan