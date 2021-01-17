import React from "react";
import $ from "jquery";

export default function ScrollButton() {
  const nextSection = (e) => {
    let currentSection = $(e.currentTarget).parents(".section");

    if (currentSection.index() < $(".section").length - 1) {
      $("html, body").animate({
          scrollTop: currentSection.next().offset().top
      }, 800);
    }
  };

  return (
    <div className="scrollButtonContainer">
      <div className="scrollPadding" onClick={nextSection}>
        <div className="scrollButton"></div>  
      </div>
    </div>
  );
}