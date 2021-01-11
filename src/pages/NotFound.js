import React from "react";

export default function NotFound(props) {
  const { setTitle } = props;
  
  setTitle("Error");
  
  return (
    <div>
      <h2>404</h2>
      <p>Internet address cannot be found</p>
    </div>
  );
}