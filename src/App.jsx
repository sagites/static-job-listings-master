// import React from "react";
import Slide from "./Components/slide";
import "./App.css"
// import picture from "../public/images/bg-header-desktop.svg"
// import ButtonSector from "./Components/buttons";

const App = ({data}) => {
  return ( 
    <div className="body">
      <div className="backpicture">
        <img src="../public/images/bg-header-desktop.svg" alt="" />
      </div>
      
      <div>
       {data && data.map( (item, i) => (
          <Slide key={i} {...item}/>
       ))}

  
      </div>
    </div>
    
   );
}
 
export default App;