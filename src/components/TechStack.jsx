import React from "react";
import StackIcon from "tech-stack-icons";

//https://www.tech-stack-icons.com/

function TechStack({ techList }) {
  const cols = techList.length >= 4 ? 4 : techList.length;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, auto)`,
        gridGap: "20px 20px",
        flexGrow: "0",
        justifyContent: "center",
      }}
    >
      {techList.map((tech, index) => (
        <StackIcon
          key={`${tech}-${index}`}
          name={tech}
          style={{ width: "60px", height: "auto" }}
        />
      ))}
    </div>
  );
}

export default TechStack;
