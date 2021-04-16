import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";

const itemArray = [
  {
    label: "one",
    src: image1,
    value: "coffee1",
    id: 1,
    active: false,
  },
  {
    label: "two",
    src: image2,
    value: "coffee2",
    id: 2,
    active: false,
  },
  {
    label: "three",
    src: image3,
    value: "coffee3",
    id: 3,
    active: false,
  },
  {
    label: "four",
    src: image4,
    value: "coffee4",
    id: 4,
    active: false,
  },
];
const itemArraySecond = [
  {
    label: "five",
    src: image5,
    value: "coffee5",
    id: 5,
    active: false,
  },
  {
    label: "six",
    src: image6,
    value: "coffee6",
    id: 6,
    active: false,
  },
  {
    label: "seven",
    src: image7,
    value: "coffee7",
    id: 7,
    active: false,
  },
  {
    label: "eight",
    src: image8,
    value: "coffee8",
    id: 8,
    active: false,
  },
];
const itemArrayThird = [
  {
    label: "nine",
    src: image9,
    value: "coffee9",
    active: false,
  },
  {
    label: "ten",
    src: image10,
    value: "coffee10",
    active: false,
  },
  {
    label: "eleven",
    src: image11,
    value: "coffee11",
    active: false,
  },
  {
    label: "twelve",
    src: image12,
    value: "coffee12",
    active: false,
  },
];

const MainComponent = () => {
  const [itemState, setItemState] = useState(itemArray);
  const [newArr, setNewArr] = useState([]);

  const changeSelectedAnswer = (item) => {
    if (item.id !== 0) {
      return (item.active = true);
    }
  };
  return (
    <>
      <p>Please select your preferred coffee today</p>
      <div>
        {itemArray.map((item, index) => {
          return (
            <div>
              <label
                value={item.value}
                key={index}
                onClick={() => changeSelectedAnswer(item)}
              >
                <input type="radio" name="coffee" />
                <img width="50px" height="50px" src={item.src} />
              </label>
            </div>
          );
        })}
      </div>
      <p>Please select your preferred tea today</p>
      <div>
        {itemArraySecond.map((item, index) => {
          return (
            <div>
              <label
                key={index}
                value={item.value}
                onClick={() => changeSelectedAnswer(item)}
              >
                <input type="radio" name="tea" />
                <img width="50px" height="50px" src={item.src} />
              </label>
            </div>
          );
        })}
      </div>
      <p>Please select your preferred meat today</p>
      <div>
        {itemArrayThird.map((item, index) => {
          return (
            <div>
              <label key={index}>
                <input type="radio" name="cookie" />
                <img width="50px" height="50px" src={item.src} />
              </label>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => {
            console.log(itemState.filter((item) => item.active == true));
          }}
        >
          SUBMIT
        </button>
        {/* {showResult && <div>{showChosenResult()}</div>} */}
      </div>
    </>
  );
};
export default MainComponent;
