
import Header from '../../components/header/Header';
import React, { useState } from 'react'
import axios from 'axios'
import Cards from '../../components/cards/Cards';

import homeSvg from "../../assets/home.svg";
import { HeaderText, HomeImg, ImgDiv } from './Home.style';
// 👆assets den resmi buraya import ettik 


const Home = () => {
  const APP_ID = "742d542a";
  const APP_KEY = "280a9f0207045a7b1eb040071263aca6";
  //  👆 2 
  const [recipes, setRecipes] = useState(null);
  const [query, setQuery] = useState("egg");
  // Burası ekrandaki kullkanıcının gördüğü istediği seyi grme yeri👆
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  // Bursasıda coklu secenek olan yer 👆 
  // 3
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  // Burası seçmeli yer ☝
  //👆 Burada js kodu oldugu için bunu buraya yazailiyoruz ama HOOklar react la ilgli oldugundan onu componentin içine yazıcaz. 


  const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  //! 👆✨  İlk olrak apimi aldım .

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url)
        setRecipes(data.hits)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Fill the Form")
    }
    // console.log(data);
    //! 4 Burada artık verimi cektim axios la 👆
    //!5 Şimdi verimi state e göndermeliyim ki ihtiyacım oldugunda kullanayım.Bunun için state tanımlıyorum  ve burada cagırıyorum.
  }
  console.log(recipes)
  // useEffect(() => {
  //   getData()
  // }, [])
  // veri devamlı akmasın diye yaptık useeffect i☝
  // useEffecti sildik çünkü searchı tıkladgında veriler gelsin diye ayarladık o yüzden 
  //!👆 burda componentdidmount yapmış oluyorum yani sürekli verilerin gelmesini engelliyorum bir kere geliyor ve sayfa yenilenene kadar tekrar gelmiyor.
  return (
    <div>
      <Header setQuery={setQuery} setselectedMeal={setSelectedMeal} mealType={mealType} getData={getData} />
      {/*☝ Burada verimi header componentine gönderdim.
      Header componentinde kullanmak istediğimden header a gönderdim  */}

      {/* Burada Recipe eger yoksa resmi göster dedik ve reciper in içinede null yaptık yada [] yapmalıyız ki bize içini göstersin.Yukarıdada recipe in içini null yaptık👇 */}
      {!recipes &&
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>}

      {/*🎉🎉 Map yapılacak bir değişkeni(veriyi) veri gelmezse ekranda bir sey göstereceksek null , göstermeyeceksek bos dizi veriyoruz . O yüzden burada  const [recipes, setRecipes] = useState(null); bunun içine null yazdık. Card içindeki Map fonk nunu veriyi aldı ekrana bastı✨✨
        */}

      {recipes?.length === 0 && <HeaderText>The Food can not be found </HeaderText>}
      {/*👆 Buradda input a saçma biseyler girince hata aldıgımızı göstermek için bunu yaptık  */}

      {recipes?.length > 0 && <Cards />}
      {/* eger length im benim 0 dan buyukse Cards ımı göster dedim  */}


      <Cards recipes={recipes} />
      {/* recipe i prop olarak card divine yolladık  */}
    </div>
  )
}

export default Home;

//! apiyi cek al gönder işlemlerini burada yapıyorum home da mainde !!!!!
//! Şimdi header verimi header componentinde {header} yaparak alıcaz 