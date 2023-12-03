// import React from "react";
import Slide from "./Components/slide";
import "./App.css"
import picture from "../public/images/bg-header-desktop.svg"

const App = ({data}) => {
  return ( 
    <>
      <div className="backpicture">
        <img src={picture} alt="" />
      </div>
      
      <div>
       {data && data.map( (item, i) => (
              <Slide key={i} {...item}/>
       ))}
      </div>
    </>
    
   );
}
 
export default App;