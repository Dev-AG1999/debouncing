
import React from "react";
export const Book = ({ image, title }) => {

  let count = 0
  let apiCalled;
  const throttle=(fn,time)=>{
    if (apiCalled) return;
    apiCalled = true
   setTimeout(()=>{
fn();
apiCalled =false;

    },time);

  };
  const handleClick=()=>{
throttle(()=>{
console.log("button is clickrd", count++)
},5000)
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        width:"200px",
        alignItems:"center",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img style={{ width: "100%",     height: "300px", objectFit: "contain" }} src={image} alt="" />
      <h3 style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"200px"}}>{title}</h3>
      <button style={{
        border: "none",
        background:" #750792",
        color: "white",
        padding: "10px",
        width: "100%",
        bordeRadius: "5px",
        cursor: "pointer",
      }} onClick={handleClick}>Read</button>
   
    </div>
  );
};
