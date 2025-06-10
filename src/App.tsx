import {ReactElement, useState} from "react"

// Square will need props, and and interface for them:

interface SquareProps {
  value : string | null;
  onSquareClick: ()=> void;
}

function Square({value, onSquareClick}: SquareProps) {
  return  <button 
          className="square" >
            {value}
          </button>;
}

// Board prop interface might look like this -
interface BoardProps {
// xIsNext : boolean;
squares : (string | null);
}



function Board(): ReactElement {
  type BoardSet = ('X' | 'O' | null)[]

  const [squares , setSquares] = useState<BoardSet>(Array(9).fill(null))

  function handleClick() {
    const nextSquares : BoardSet = squares.slice()
    nextSquares[0] = "X"
    setSquares(nextSquares);
  }

  return (
  <>
    <div className="board-row"></div>
      <Square value={squares[0]} onSquareClick={handleClick}/>
      <Square value={squares[1]} onSquareClick={handleClick}/>
      <Square value={squares[2]} onSquareClick={handleClick}/>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={handleClick}/>
      <Square value={squares[4]} onSquareClick={handleClick}/>
      <Square value={squares[5]} onSquareClick={handleClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={handleClick}/>
      <Square value={squares[7]} onSquareClick={handleClick}/>
      <Square value={squares[8]} onSquareClick={handleClick}/>
    </div>
  </>
  )
}

// Helpful code from Kayla to take permissions for CRA and clean the cache : 
// 
// sudo chown -R $(whoami) ~/.npm
//
// npm cache clean --force
export default Board;