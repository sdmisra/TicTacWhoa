import {FC, ReactNode} from "react"

const Square : FC = ( ): ReactNode | Promise<ReactNode> => {
  return 
  <>
  <button className="square">X</button>
  </>;
}

// Helpful code from Kayla to take permissions for CRA and clean the cache : 
// 
// sudo chown -R $(whoami) ~/.npm
//
// npm cache clean --force
export default Square;