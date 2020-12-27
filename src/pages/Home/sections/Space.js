import React from "react";
import Particles from 'react-particles-js';

export default function Space() {
  return (
    <div className="section" id="space">
      <div className="presentation">
        <div>Hello, I'm <span>Fernando Perez</span>.</div>
        <div>I'm a simple developer.</div>
      </div>
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
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          }
        },
        retina_detect: true
      }} />
    </div>
  );
}