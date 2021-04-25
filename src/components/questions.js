import React, { useState, useEffect } from "react";
import style from "./style.css";

const Questions = (props) => {
  const { itemState, changeSelectedAnswer } = props;

  return (
    <div className="question">
      <div className="item-title">
        <div>{itemState.title}</div>
      </div>
      <div className="item">
        {itemState.itemArray.map((item) => {
          return (
            <div className={` ${item.active ? "marked" : ""}`}>
              <div className="question-item">
                <img
                  width="284px"
                  height="201px"
                  src={item.src}
                  key={item.id}
                  onClick={() => changeSelectedAnswer(item.id)}
                  className={` ${item.active ? "marked" : "hover"}`}
                />
                <div className="question-title">
                  <h1>{item.value}</h1>
                  <div className="author">{item.author}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Questions;
