import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import $ from "jquery";

import ScrollButton from "../../../components/ScrollButton";

export default function Space(props) {
  const { fullpageApi } = props;
  const [touchable, setTouchable] = useState(true);

  useEffect(() => {
    setTouchable(("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  }, []);

  return (
    <div className="section" id="space">
      <Particles params={{
        particles: {
          number: {
            density: {
              enable: true,
              value_area: 1000
            }
          },
          shape: {
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#FFFFFF",
            opacity: 0.4,
            width: 1
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: !touchable,
              mode: "grab"
            },
            resize: true
          }
        },
        retina_detect: true
      }} />
      <div className="presentation">
        <div>Hello, I'm <span>Fernando Perez</span></div>
        <div><SlotText /></div>
      </div>
      <ScrollButton fullpageApi={fullpageApi}/>
    </div>
  );
}

function SlotText() {
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

    container.animate({top: -index*height}, 500, "swing", function() {
      setTimeout(function () {
        pushItems(container, index);
        
        container.css({top: 0});
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