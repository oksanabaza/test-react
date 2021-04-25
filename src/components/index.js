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
import result1 from "../assets/result1.jpeg";
import result2 from "../assets/result2.jpeg";
import result3 from "../assets/result3.jpeg";
import result4 from "../assets/result4.jpeg";
import style from "./style.css";

const data = [
  {
    id: 1,
    title: "Choose your bread:",
    itemArray: [
      {
        label: "one",
        src: image1,
        value: "White bread",
        author: "Laura Ockel on Unsplash",
        id: 1,
        active: false,
      },
      {
        label: "two",
        src: image2,
        value: "Wheat bread",
        author: "Wesual Click on Unsplash",
        id: 2,
        active: false,
      },
      {
        label: "three",
        src: image3,
        value: "Rye bread",
        author: "Pradeep Javedar on Unsplash",
        id: 3,
        active: false,
      },
      {
        label: "four",
        src: image4,
        value: "Sourdough bread",
        author: "Monika Grabkowska on Unsplash",
        id: 4,
        active: false,
      },
    ],
  },
  {
    id: 2,
    title: "Add-ons?",
    itemArray: [
      {
        label: "five",
        src: image5,
        value: "Apples",
        author: "Estúdio Bloom on Unsplash",
        id: 5,
        active: false,
      },
      {
        label: "six",
        src: image6,
        value: "Peanut butter",
        author: "Olia Nayda on Unsplash",
        id: 6,
        active: false,
      },
      {
        label: "seven",
        src: image7,
        value: "Lettuce",
        author: "Nathan Dumlao on Unsplash",
        id: 7,
        active: false,
      },
      {
        label: "eight",
        src: image8,
        value: "Tomatoes",
        author: "Rodion Kutsaev on Unsplash",
        id: 8,
        active: false,
      },
    ],
  },
  {
    id: 3,
    title: "Choose something else to add on",
    itemArray: [
      {
        label: "nine",
        src: image9,
        id: 9,
        value: "Ham",
        author: "Thought Catalog on Unsplash",
        active: false,
      },
      {
        label: "ten",
        src: image10,
        id: 10,
        value: "Bacon",
        author: "Wright Brand Bacon on Unsplash",
        active: false,
      },
      {
        label: "eleven",
        src: image11,
        value: "Salami",
        author: "Wesual Click on Unsplash",
        id: 11,
        active: false,
      },
      {
        label: "twelve",
        src: image12,
        id: 12,
        value: "Turkey",
        author: "Alison Marras on Unsplash",
        active: false,
      },
    ],
  },
];

const MainComponent = () => {
  const [itemState, setItemState] = useState(data);
  const [open, setOpen] = useState(false);
  const [v, setv] = useState("");
  const [anchorEl, setAnchor] = useState(null);

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

    const newArr = itemState.map((itemArray) => {
      return itemArray.itemArray.flat();
    });
    const newVal = newArr.flat().map((item) => {
      if (item.active == true) {
        return item.id;
      }
    });
    const trueVal = newVal.filter((item) => item !== undefined);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setv(trueVal.reduce(reducer));

    setItemState([...itemState]);
  };

  let mood = "";
  let content = "";
  let src = "";
  if (0 <= v && v <= 15) {
    mood = <div>Your curiosity</div>;
    content = (
      <div>
        Your best quality is your curiosity. You're always asking questions and
        the first one to try new things. You're always down for a new adventure!
      </div>
    );
    src = result1;
  }
  if (16 <= v && v <= 20) {
    mood = <div>our generosity</div>;
    content = (
      <div>
        Your best quality is your generosity. Without hesitation, you'll let
        someone borrow one of your things and share your food. You enjoy giving
        to others and haven’t mastered the art of saying "no" yet.
      </div>
    );
    src = result2;
  }
  if (21 <= v && v <= 25) {
    mood = <div>Your honesty</div>;
    content = (
      <div>
        Your best quality is your honesty. You have a hard time lying to others,
        and you're the one your friends and family always know they can trust.
        You're the type to admit your mistakes.
      </div>
    );
    src = result3;
  }
  if (26 <= v && v <= 30) {
    mood = <div>Your supportive nature</div>;
    content = (
      <div>
        The best thing about you is that you're supportive. You’re the first
        person to go and help friends, and you always lend a shoulder to cry on.
        You're an attentive listener and good at giving advice.
      </div>
    );
    src = result4;
  }

  return (
    <>
      <div className="wrapper">
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

        <div>
          {!open && <button onClick={() => setOpen(true)}>SUBMIT</button>}
          {open && (
            <div className="result">
              <div className="header">
                Make Your Dream Grilled Cheese And We'll Reveal Your Absolute
                Best Quality
              </div>
              <div className="content">
                <div className="content-header">{mood}</div>
                <div className="content-text">{content}</div>
                <div className="content-image">
                  <img src={src} />
                </div>
              </div>
              <div className="footer"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MainComponent;
