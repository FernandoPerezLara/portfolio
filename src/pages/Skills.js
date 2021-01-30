import React, { useEffect } from "react";

export default function Skills(props) {
  const { setTitle } = props;

  useEffect(() => {
    setTitle("Skills");
  }, [setTitle]);

  return (
    <div>
      <h2>Skills</h2>
      <p>Skills page</p>
    </div>
  );
}