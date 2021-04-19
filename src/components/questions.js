import React, { useState, useEffect } from "react";
import style from "./style.css";

const Questions = (props) => {
  const { itemState, changeSelectedAnswer } = props;

  return (
    <div className="question">
      <div>{itemState.title}</div>
      {itemState.itemArray.map((item) => {
        return (
          <div className="question-item">
            <img
              width="50px"
              height="50px"
              src={item.src}
              key={item.id}
              // onClick={() => SelectedAnswer(item)}
              onClick={() => changeSelectedAnswer(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Questions;
