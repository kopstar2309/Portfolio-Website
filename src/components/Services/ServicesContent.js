import React from "react";
import "./service.css";
const ServicesContent = (props) => {
  const { Icon, Title, Size } = props;
  return (
    <div className="icon-container">
      <Icon className="icon" size={Size} />
      <h3 className="title">{Title}</h3>
    </div>
  );
};

export default ServicesContent;
