import React from "react";
export const Book = ({ image, title }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        height: "300px",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img style={{ width: "100%", objectFit: "contain" }} src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};
