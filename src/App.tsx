import {ReactElement, useState} from "react"

function Square() {

  const [value, setValue] = useState<null | 'X'>(null);

  function handleClick() {
    setValue('X');
  }

  return  <button 
          className="square" 
          onClick={handleClick}>
            {value}
          </button>;
}

function Board(): ReactElement {
  return (
  <>
    <div className="board-row"></div>
      <Square />
      <Square />
      <Square />
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
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