import React, { useEffect } from "react";

export default function About(props) {
  const { setTitle } = props;
  
  useEffect(() => {
    setTitle("About");
  }, [setTitle]);
  
  return (
    <div>
      <h2>About</h2>
      <p>About page</p>
    </div>
  );
}