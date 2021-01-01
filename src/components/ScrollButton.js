import React from "react";

export default function ScrollButton(props) {
  const { fullpageApi } = props;

	return (
    <div className="scrollButtonContainer">
		  <div className="scrollButton" onClick={() => fullpageApi.moveSectionDown()}></div>
    </div>
	);
}