import styled from "styled-components"


export const Flex = styled.div`
    
    display: flex;
    justify-content:${({ justify }) => (justify ? justify : "center")};
    /*👆Burada dinamik stillendirme yapıt-yoruz.Burada dedik ki justify eger varsa center yap dedik. */
    align-items: ${({ align }) => (align ? align : "center")};
    /* 👆align varsa align i center yap  */
    flex-wrap:${({ wrap }) => wrap && wrap}

`;
/* export default Flex; */
/* ✨✨ Burası Eger yaptıklarımdan farklı bisey gönderirsem kabul et diye olusturgum kısım  */
/* Bunu istediğim zaman kullanmak için hazır hale getirdik.  */