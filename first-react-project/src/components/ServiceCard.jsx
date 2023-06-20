import React from "react";

function ServiceCard({ headline, para, iconColor, icon }) {
  // { headline, para, iconColor, icon } -> we're destructuring props to get the inner values
  return (
    <>
      <div className="service-item">
        <div className="card-icon" style={{ backgroundColor: iconColor }}>
          <ion-icon name={icon}></ion-icon>
        </div>
        <h3>{headline}</h3>
        <p>{para}</p>
      </div>
    </>
  );
}

export default ServiceCard;
