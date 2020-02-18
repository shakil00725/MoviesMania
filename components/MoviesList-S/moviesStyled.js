import styled from "styled-components";



const Title = styled.div`
  width:200px;
  display:flex;
  padding-top:20px;
  padding-bottom:20px;
  box-shadow: 0px 2px 5px 0px #e5e7e5;
  flex-direction:row;
  justify-content:space-evenly;
  text-align:center;

  >h4{
    margin:0px;
  }
`;
const MovieBox = styled.div`
content:url("https://image.tmdb.org/t/p/w500${props => props.urls}");
`;
const TitleContainer = styled.div`
padding:20px;

`;

const Wrapper = styled.div`

  margin: 0 auto;
  max-width: 1400px;
  width: 73%;
  height:400px;
  display:flex;
  flex-wrap:wrap;

  ${MovieBox} {
    width:200px;
    padding:2px 2px 2px 2px;
    background:#29BB8A;
    >span{
        font-size:15px;
    }
  }
`;

export { Wrapper, Title, MovieBox, TitleContainer };
