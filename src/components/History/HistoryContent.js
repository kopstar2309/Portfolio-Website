import React from "react";
import "./history.css";
import { Fade } from "react-reveal";

export const HistoryContent = (props) => {
  const {
    Type,
    Icon,
    IconColor,
    StartDate,
    EndDate,
    Designation,
    Title,
    Description,
  } = props;
  return (
    <Fade
      top={Type === "top"}
      bottom={Type === "bottom"}
      left={Type === "left"}
      right={Type === "right"}
    >
      <div className="container">
        <div className="inner-container-flex">
          {Icon && (
            <div className="history-icon">
              <Icon color={IconColor} size={40} />
            </div>
          )}
          <div className="inner-container-content">
            {StartDate && EndDate && (
              <h6>
                {StartDate} - {EndDate}
              </h6>
            )}
            {Designation && <h4>{Designation}</h4>}
            {Title && <h5>{Title}</h5>}
            {Description && <p>{Description}</p>}
          </div>
        </div>
      </div>
    </Fade>
  );
};
