import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import "../../styles/home.scss";

import Space from "./sections/Space.js";

export default function Home(props) {
  const { setTitle, setIsOpen } = props;

  useEffect(() => {
    setTitle("Home");
  });

  return (
    <ReactFullpage
      scrollingSpeed={1000}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Space fullpageApi={fullpageApi} />
            <div className="section">
              <div style={{height: "100px"}}>Some text 1</div>
              <div style={{height: "100px"}}>Some text 2</div>
              <div style={{height: "100px"}}>Some text 3</div>
              <div style={{height: "100px"}}>Some text 4</div>
              <div style={{height: "100px"}}>Some text 5</div>
              <div style={{height: "100px"}}>Some text 6</div>
              <div style={{height: "100px"}}>Some text 7</div>
              <div style={{height: "100px"}}>Some text 8</div>
              <div style={{height: "100px"}}>Some text 9</div>
              <div style={{height: "100px"}}>Some text 10</div>
              <div style={{height: "100px"}}>Some text 11</div>
              <div style={{height: "100px"}}>Some text 12</div>
              <div style={{height: "100px"}}>Some text 13</div>
              <div style={{height: "100px"}}>Some text 14</div>
              <div style={{height: "100px"}}>Some text 15</div>
              <div style={{height: "100px"}}>Some text 16</div>
              <div style={{height: "100px"}}>Some text 17</div>
              <div style={{height: "100px"}}>Some text 18</div>
              <div style={{height: "100px"}}>Some text 19</div>
              <div style={{height: "100px"}}>Some text 20</div>
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
      scrollBar={true}
      autoScrolling={false}
      onLeave={() => setIsOpen(false)}
    />
  );
}