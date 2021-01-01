import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import "../../styles/home.scss";

import Space from "./sections/Space.js";

export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Space fullpageApi={fullpageApi} />
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
            <div className="section">
              <p>Section 4</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}