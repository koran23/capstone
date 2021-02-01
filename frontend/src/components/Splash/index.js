import React from "react";
import BackgroundImage from "../../assets/spicsgs9nde61.jpg"

export default function Splash() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
