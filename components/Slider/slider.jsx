import React from "react";
import Carousel from "nuka-carousel";

const Slider = () => (
  <div style={{ margin:"0 auto", maxWidth:'1400px', width:'73%'}}>
    <Carousel
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      heightMode="first"
      cellAlign="center"
      swiping
      slidesToShow={1.0}
      transitionMode="scroll"
    >
      <img src="https://cf.shopee.com.my/file/53853389a9dc9038cc0294c7e70b4f0c_xxhdpi" />
      <img src="https://cf.shopee.com.my/file/479628fe9442c83ae0e6870bee3bc1f4_xxhdpi" />
    </Carousel>
  </div>
);

export default Slider;
