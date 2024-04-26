import React, { useState } from "react";

function MyButton({ onClick, value }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 200);
  };

  return (
    <button
      className={`btn bg-white text-black w-16 h-16 text-4xl font-bold rounded-md ${
        clicked ? "opacity-50" : ""
      }`}
      onClick={() => {
        handleClick();
        onClick();
      }}
    >
      {value}
    </button>
  );
}

export default MyButton;
