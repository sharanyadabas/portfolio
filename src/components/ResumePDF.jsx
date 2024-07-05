import React from "react";

const ResumePDF = ({ resumeLink, children }) => {
  const openPDF = () => {
    window.open(resumeLink, "_blank", "noopener,noreferrer");
  };

  return <div onClick={openPDF}>{children}</div>;
};

export default ResumePDF;
