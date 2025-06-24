import React, { useEffect } from "react";

const Temp = (props) => {
  useEffect(() => {
    console.log("useEffect called");
    console.log("Name:", props.name);
    return () => {
      console.log("useEffect cleanup called");
    };
  }, []);
  return <div>Temp {props.name}</div>;
};

export default Temp;
