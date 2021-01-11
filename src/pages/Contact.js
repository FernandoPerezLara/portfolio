import React from "react";

export default function Contact(props) {
  const { setTitle } = props;
  
  setTitle("Contact");
  
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact page</p>
    </div>
  );
}