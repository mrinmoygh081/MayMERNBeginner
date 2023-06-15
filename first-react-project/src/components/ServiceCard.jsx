import React from "react";

function ServiceCard(props) {
  // { headline, para, iconColor, icon } -> we're destructuring props to get the inner values
  return (
    <>
      <div className="service-item">
        <div className="card-icon" style={{ backgroundColor: props.iconColor }}>
          <ion-icon name={props.icon}></ion-icon>
        </div>
        <h3>{props.headline}</h3>
        <p>{props.para}</p>
      </div>
    </>
  );
}

export default ServiceCard;
