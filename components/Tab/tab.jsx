import React from "react";
import { SubWrapper, Tab } from "./tabStyled";

const Tabbar = ({ tabLayoutchange }) => (
  <SubWrapper>
    <Tab>
      <div>
        <input
          onClick={tabLayoutchange}
          type="radio"
          name="travel"
          value="1"
          defaultChecked
        />
      </div>
      <div>
        <input onClick={tabLayoutchange} type="radio" name="travel" value="2" />
      </div>
      <div>
        <input onClick={tabLayoutchange} type="radio" name="travel" value="3" />
      </div>
      <div>
        <input onClick={tabLayoutchange} type="radio" name="travel" value="4" />
      </div>
    </Tab>
  </SubWrapper>
);

export default Tabbar;
