import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// export default test;

// import { useState } from 'react';

// // --- Square Props Interface ---
// interface SquareProps {
//   value: string | null;
//   onSquareClick: () => void;
// }

// function Square({ value, onSquareClick }: SquareProps) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// // --- Board Props Interface ---
// interface BoardProps {
//   xIsNext: boolean;
//   squares: (string | null)[];
//   onPlay: (nextSquares: (string | null)[]) => void;
// }

// function Board({ xIsNext, squares, onPlay }: BoardProps) {
//   function handleClick(i: number) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {[0, 1, 2].map((i) => (
//           <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
//         ))}
//       </div>
//       <div className="board-row">
//         {[3, 4, 5].map((i) => (
//           <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
//         ))}
//       </div>
//       <div className="board-row">
//         {[6, 7, 8].map((i) => (
//           <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState<number>(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares: (string | null)[]) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove: number) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((_, move) => {
//     const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// // --- Winner Calculation ---
// function calculateWinner(squares: (string | null)[]): string | null {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
