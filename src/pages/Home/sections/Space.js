import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { useSpring, animated, interpolate } from "react-spring";

import ScrollButton from "../../../components/ScrollButton";
import SlotText from "../../../components/SlotText";

export default function Space() {
  const [touchable, setTouchable] = useState(true);

  const [springProps, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 500, friction: 10, clamp: true } }));
  
  const interParallax = interpolate(springProps.y, (y) => `translateY(calc(${y * 0.3}px - 50%))`);

  useEffect(() => {
    setTouchable(("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  }, []);

  useEffect(() => {
    const onScroll = () => set({ y: [window.pageYOffset] });

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

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
      <animated.div className="presentation"  style={{ transform: interParallax }}>
        <div>Hello, I'm <span>Fernando Perez</span></div>
        <div><SlotText /></div>
      </animated.div>
      <ScrollButton />
    </div>
  );
}