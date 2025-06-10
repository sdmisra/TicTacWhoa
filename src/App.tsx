import {ReactElement} from "react"

function Board(): ReactElement {
  return (
    <>
    <div className="board-row"></div>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    <div className="board-row">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
    <div className="board-row">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button> 
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