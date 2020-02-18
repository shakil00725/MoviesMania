import React, { useState, useEffect  } from 'react';
import {
  Wrapper,
  UpperMenu,
  Input,
  SerachIcon,
  HamburgerMenu,
  MobileWrapper
} from "./headerStyled";
import { faBars, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    console.log(open);
  });

    return(
      <Wrapper>
      <UpperMenu>
        <SerachIcon
          icon={faSearchPlus}
          size="2x"
          color="grey"
          style={{
            color: "#29BB8A",
            height: "25px",
            position: "relative",
            paddingLeft: "210px",
            paddingRight: "10px",
            alignSelf: "center"
          }}
        />
        <Input type="text" placeholder="Search Movies or Series" />
        <HamburgerMenu
          icon={faBars}
          size="2x"
          color="grey"
          onClick={() => {
            open == true ? setOpen(false):setOpen(true);
          }}
          style={{
            color: "#29BB8A",
            height: "25px",
            position: "relative",
            paddingLeft: "210px",
            paddingRight: "10px",
            alignSelf: "center"
          }}
        />
      </UpperMenu>
      {
        open == true ? 
        (
          <MobileWrapper>
          <div>
          <div>Home</div>
          <div>Movies</div>
          <div>Series</div>
          <div>Coming Soon</div>
          <div>
           <SerachIcon
           icon={faSearchPlus}
           size="1x"
           color="grey"
         />
          <input type="text" placeholder="Search Movies or Series" />
          </div>
          </div>
      </MobileWrapper>
        ):(
          <span></span>
        )
      }
  

    </Wrapper>
    )
  };

export default Header;
