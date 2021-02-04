import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";

import TypeText from "../components/TypeText";

import "../styles/home.scss";

export default function Home(props) {
  const { setTitle } = props;

  const [touchable, setTouchable] = useState(true);

  useEffect(() => {
    setTitle("Home");
  });

  useEffect(() => {
    setTouchable(("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  }, []);

  return (
    <div className="container">
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
        <div>Hello, I'm <span className="name">Fernando Perez</span></div>
        <div><TypeText /></div>
      </div>
    </div>
  );
}