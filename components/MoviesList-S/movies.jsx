import React from "react";
import Carousel from "nuka-carousel";
import Router from 'next/router'
import { Wrapper, Title, MovieBox, TitleContainer } from "./moviesStyled";

const Movies = ({data,title}) => (
  <Wrapper>
    {data.map(p => (
      <TitleContainer>
      <MovieBox onClick={() => Router.push({
        pathname: '/details',
        query: { pid: p.id },
      })} 
      urls={p.poster_path}/>
      <Title>
          <h4>{p.title}</h4>
      </Title>
      </TitleContainer>
      
    ))}
  </Wrapper>
);

export default Movies;
