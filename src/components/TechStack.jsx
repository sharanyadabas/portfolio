import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

//https://devicon.dev/

function TechStack({ techList }) {
  const cols = techList.length >= 4 ? 4 : techList.length;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, auto)`,
        gridGap: "20px 20px",
        flexGrow: "0",
        justifyContent: "flex-start",
      }}
    >
      {techList.map((tech, index) => (
        <Tooltip key={`${tech}-${index}`} title={tech}>
          <Button>
            <i
              className={`devicon-${tech}-plain`}
              style={{ fontSize: "60px" }}
            />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}

export default TechStack;
