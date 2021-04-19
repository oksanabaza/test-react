import React from "react";

const Result = (props) => {
  const { open, itemState, status } = props;

  console.log("status", status);
  return <div>{open && <div>sad</div>}</div>;
};
export default Result;
