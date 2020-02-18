import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv , faFilm , faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, SideMenue, Menu } from "./headerStyled";

const Sidebar = () => (
  <Wrapper>
    <SideMenue>
      <h2 style={{ textAlign: "center" }}>
        MOVIE<span style={{ color: "#29BB8A " }}>s</span>
      </h2>
      <Menu>
        <div>
          <FontAwesomeIcon icon={faTv} size="2x" color="#29BB8A" />
          <h4 style={{color:"#29BB8A"}}>Home</h4>
        </div>
        <div>
          <FontAwesomeIcon icon={faFilm} size="2x" color="#29BB8A"/>
          <h4 style={{color:"#29BB8A"}}>Movies</h4>
        </div>
        <div>
          <FontAwesomeIcon icon={faAudioDescription} size="2x" color="#29BB8A" />
          <h4 style={{color:"#29BB8A"}}>Series</h4>
        </div>
        <div>
        <FontAwesomeIcon icon={faAudioDescription} size="2x" color="#29BB8A" />
        <h4 style={{color:"#29BB8A"}}>Comming Soon</h4>
      </div>
      </Menu>
    </SideMenue>
  </Wrapper>
);

export default Sidebar;
