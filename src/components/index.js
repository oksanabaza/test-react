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
import Questions from "./questions";
import Result from "./result";
import SadResult from "./sad-result";

const data = [
  {
    id: 1,
    title: "first title",
    itemArray: [
      { label: "one", src: image1, value: "coffee", id: 1, active: false },
      { label: "two", src: image2, value: "coffee", id: 2, active: false },
      { label: "three", src: image3, value: "coffee", id: 3, active: false },
      { label: "four", src: image4, value: "coffee", id: 4, active: false },
    ],
  },
  {
    id: 2,
    title: "second title",
    itemArray: [
      { label: "five", src: image5, value: "coffee5", id: 5, active: false },
      { label: "six", src: image6, value: "coffee6", id: 6, active: false },
      { label: "seven", src: image7, value: "coffee7", id: 7, active: false },
      { label: "eight", src: image8, value: "coffee8", id: 8, active: false },
    ],
  },
  {
    id: 3,
    title: "third title",
    itemArray: [
      { label: "nine", src: image9, id: 9, value: "coffee9", active: false },
      { label: "ten", src: image10, id: 10, value: "coffee10", active: false },
      {
        label: "eleven",
        src: image11,
        value: "coffee11",
        id: 11,
        active: false,
      },
      {
        label: "twelve",
        src: image12,
        id: 12,
        value: "coffee12",
        active: false,
      },
    ],
  },
];

const MainComponent = () => {
  const [itemState, setItemState] = useState(data);
  const [open, setOpen] = useState(false);
  const [happy, setHappy] = useState(
    [
      [data[0].itemArray[0]],
      [data[1].itemArray[0]],
      [data[2].itemArray[0]],
    ].flat()
  );
  const [indifferent, setIndifferent] = useState(
    [
      [data[0].itemArray[1]],
      [data[1].itemArray[1]],
      [data[2].itemArray[1]],
    ].flat()
  );
  const [sad, setSad] = useState(
    [
      [data[0].itemArray[2]],
      [data[1].itemArray[2]],
      [data[2].itemArray[2]],
    ].flat()
  );
  const [cheerful, setCheerful] = useState(
    [
      [data[0].itemArray[3]],
      [data[1].itemArray[3]],
      [data[2].itemArray[3]],
    ].flat()
  );

  const changeActivities = (dataID) => (itemArrayID) => {
    const found = itemState.find((itemState) => {
      return dataID === itemState.id;
    });

    found.itemArray.map((itemArray) => {
      itemArray.active = false;
      if (itemArray.id === itemArrayID) {
        return (itemArray.active = true);
      }
    });

    setItemState([...itemState]);
  };

  const happyMood = happy.filter((happy) => happy.active === true).length;
  const indifferentMood = indifferent.filter(
    (indifferent) => indifferent.active === true
  ).length;
  const sadMood = sad.filter((sad) => sad.active === true).length;
  const cheerfulMood = cheerful.filter((cheerful) => cheerful.active === true)
    .length;
  return (
    <>
      <div>
        {data.map((element) => {
          return (
            <div key={element.id}>
              <Questions
                itemState={element}
                changeSelectedAnswer={changeActivities(element.id)}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => setOpen(true)}>SUBMIT</button>
        {open && (
          <div>
            {happyMood == "3" ? <div>happy</div> : null}
            {indifferentMood == "3" ? <div>indifferent</div> : null}
            {sadMood == "3" ? <div>sad</div> : null}
            {cheerfulMood == "3" ? <div>cheerful</div> : null}
            {
              (happyMood,
              indifferentMood,
              sadMood,
              cheerfulMood == "1" ? <div>hmm....that's interesting</div> : null)
            }
          </div>
        )}
      </div>
    </>
  );
};
export default MainComponent;
