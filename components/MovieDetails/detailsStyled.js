import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  flex-wrap:wrap;
`;

export const Sidepart = styled.div`
  box-shadow: inset 0 0 55px 1px #e5e7e5;
  width:30%;

  >div{
    text-align:left;
  }
  @media (max-width: 800px) {
    width:100%;
    }

`;

export const Mainpart = styled.div`
  width:70%;
  box-shadow: inset 0 0 55px 1px #e5e7e5;
  @media (max-width: 800px) {
    width:100%;
    }
`;

export const Wallpaper = styled.div`
    content:url("https://image.tmdb.org/t/p/w500${props => props.urls}");
    width: 100%;
    margin:1px;
`;

export const SmallWallpaper = styled.div`
    content:url("https://image.tmdb.org/t/p/w500${props => props.urls}");
    width:280px;
    margin:1px;

`;

export const TitleGrey = styled.span`
  color:grey;
  font-size:1rem;
`;

export const TitleGrey2 = styled.h1`
  color:grey;
  font-size:1rem;
  
`;

export const ReviewContainer = styled.div`
  display:flex;
  width: 280px;
  flex-flow:column;
  padding:5px;

`;

export const VideoContainer = styled.div`

  >h4{
    margin:0px;
  }
`;

export const MovieBox = styled.div`
content:url("https://image.tmdb.org/t/p/w500${props => props.urls}");
width:250px;
`;