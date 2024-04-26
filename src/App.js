import React, { useState, useRef } from "react";
import "./index.css";
import Square from "./Square";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const playerRef = useRef();

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : ` Player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="flex justify-center items-center h-screen flex-col ">
        <h1 className=" text-7xl font-extrabold  text-center mt-10 mb-10">
          Tic Tac Toe
        </h1>
        <div className="mb-4 text-center font-bold   text-3xl">{status}</div>
        <div className="grid grid-cols-3 gap-4 p-5 border-white border-2 rounded-3xl">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button
          className=" mt-5 py-2 px-5 text-xl border-white border-2 rounded-lg hover:bg-white hover:text-black"
          onClick={resetGame}
        >
          Reset
        </button>
        {winner && (
          <dotlottie-player
            ref={playerRef}
            src="https://lottie.host/90c59ac8-e55d-46c5-a118-3fd21206cae7/MdHmLioWdw.json"
            autoplay
            style={{
              width: "500px",
              height: "500px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            onEvent={(event) => {
              if (event === "complete") resetGame();
            }}
          />
        )}
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
