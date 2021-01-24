import React, { useEffect } from "react";
import { useSpring, animated, interpolate } from "react-spring";

import "../../styles/home.scss";

import Space from "./sections/Space.js";

export default function Home(props) {
  const { setTitle } = props;

  const [springProps, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 500, friction: 200, clamp: true } }));

  const interScroll = interpolate(springProps.y, y => `translate3d(0, ${y}px, 0)`);

  useEffect(() => {
    setTitle("Home");
  });

  useEffect(() => {
    const onScroll = () => set({ y: [-window.pageYOffset] });

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [set]);

  return (
    <animated.div className="sectionContainers" style={{ transform: interScroll }}>
      <Space />

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
    </animated.div>
  );
}