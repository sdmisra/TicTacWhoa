import {ReactElement} from "react"

function Square({value} : any) {
  function handleClick() {
    console.log('clicked!');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

function Board(): ReactElement {
  return (
  <>
    <div className="board-row"></div>
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
    <div className="board-row">
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>
    <div className="board-row">
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
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