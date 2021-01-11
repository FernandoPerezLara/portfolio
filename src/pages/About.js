import React from "react";

export default function About(props) {
  const { setTitle } = props;
  
  setTitle("About");
  
  return (
    <div>
      <h2>About</h2>
      <p>About page</p>
    </div>
  );
}