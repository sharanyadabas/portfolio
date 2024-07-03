import React from "react";
import StackIcon from "tech-stack-icons";

//https://www.tech-stack-icons.com/

function TechStack({ techList }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: "20px 20px" }}>
      {techList.map((tech, index) => (
        <StackIcon key={`${tech}-${index}`} name={tech} style={{width: "80px", height: "auto"}}/>
      ))}
    </div>
  );
}

export default TechStack;
