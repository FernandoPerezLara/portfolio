import React from "react";

export default function ScrollButton(props) {
  const { fullpageApi } = props;

  return (
    <div className="scrollButtonContainer">
      <div className="scrollPadding" onClick={() => fullpageApi.moveSectionDown()}>
        <div className="scrollButton"></div>
      </div>
    </div>
  );
}