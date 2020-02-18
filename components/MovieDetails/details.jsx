import React from "react";
import YouTube from "react-youtube";
import Carousel from "nuka-carousel";
import {
  Wrapper,
  Sidepart,
  Mainpart,
  Wallpaper,
  SmallWallpaper,
  TitleGrey,
  TitleGrey2,
  ReviewContainer,
  VideoContainer,
  MovieBox
} from "./detailsStyled";

const Details = ({ details, reviews, opts, videos, similarVideos }) => (
  <Wrapper>
    <Sidepart>
      <div>
        <SmallWallpaper urls={details.poster_path} />
        <TitleGrey2>{details.title}</TitleGrey2>
        <TitleGrey>Release Date</TitleGrey>
        <TitleGrey2>{details.release_date}</TitleGrey2>
        <TitleGrey>Orginal Language</TitleGrey>
        <TitleGrey2>{details.original_title}</TitleGrey2>
      </div>


      <TitleGrey
      style={{
        color: "black",
        fontSize: "1.5rem",
        padding: "5px",
        paddingBottom: "10px"
      }}
    >
      Reviews
    </TitleGrey>
    {reviews.map(p => (
      <ReviewContainer>
        <h4>{p.author}</h4>
        <spam>
          They don't make many Sci-Fi films these days. This was a pleasant
          surprise all throughout the film. I really like this film.
        </spam>
      </ReviewContainer>
    ))}

    </Sidepart>
    <Mainpart>
      <Wallpaper urls={details.backdrop_path} />

      <VideoContainer>
        <h4 style={{ padding: "5px", color: "black" }}>Media</h4>
        <Carousel
          renderBottomCenterControls={null}
          cellAlign="left"
          cellSpacing={4}
          slideIndex={0}
          slideWidth="250px"
          heightMode="first"
          wrapAround
          swiping
          transitionMode="scroll"
        >
          {videos.map(p => (
            <YouTube videoId={p.key} opts={opts} />
          ))}
        </Carousel>
      </VideoContainer>
      <div>
        <h4>Storyline</h4>
        <h7>{details.overview}</h7>
      </div>
      <h4 style={{ padding: "5px", color: "black" }}>Similar Movies</h4>
      <Carousel
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
        renderBottomCenterControls={null}
        heightMode="first"
        cellAlign="left"
        swiping
        slideWidth="255px"
        slidesToShow={1.0}
        transitionMode="scroll"
      >
        {similarVideos.map(p => (
          <MovieBox urls={p.poster_path} />
        ))}
      </Carousel>
    </Mainpart>
  </Wrapper>
);

export default Details;
