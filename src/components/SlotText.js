import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function SlotText() {
  const wordList = ["React", "Python", "C#", "NodeJS", "JavaScript", "React Native", "C", "Visual Basic", "Arduino", "MATLAB", "SQL", "Angular", "R", "Verilog", "Go", "TypeScript", "Tensorflow"];
  const container = $("#slotText .slotContainer");
  const [height, setHeight] = useState(48);

  useEffect(() => {
    buildSlot();
    slotHeight();

    $("#slotText").height(height);

    function slotHeight() {
      setHeight($(".slotItem").height());
    }

    window.addEventListener("resize", slotHeight);

    const interval = setInterval(setAnimation, 2000);

    return () => clearInterval(interval);
  });

  const buildSlot = () => {
    const items = wordList.map(buildItem);

    container.append(items);
  };

  const buildItem = (text) => {
    return $("<div>").addClass("slotItem").text(text);
  };

  const setAnimation = () => {
    var index = Math.floor(Math.random() * (wordList.length - (~~(wordList.length / 3)))) + (~~(wordList.length / 3));

    container.animate({ top: -index * height }, 500, "swing", function () {
      setTimeout(function () {
        pushItems(container, index);

        container.css({ top: 0 });
      }, 300);
    });
  };

  const pushItems = (container, index) => {
    var children = container.find(".slotItem");

    children.slice(0, index).insertAfter(children.last());

    if (index === children.length) {
      pushItems(container, 1);
    }
  }

  return (
    <div className="slotMask" id="slotText">
      <div className="slotContainer"></div>
    </div>
  );
}