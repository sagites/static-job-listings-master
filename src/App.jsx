import React, { useState } from "react";
import Slide from "./Components/slide";
import Header from "./Components/Header";
import "./App.css";
import data from './assets/data.json'
// import picture from "../public/images/bg-header-desktop.svg"
// import ButtonSector from "./Components/buttons";

const App = () => {

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilter = (value) => {
    if (selectedFilters === undefined) {
      setSelectedFilters([value]);
    } else if (!selectedFilters.includes(value)) {
      setSelectedFilters([...selectedFilters, value]);
    }
  }

  const filteredData = data.filter((item) => {
    return selectedFilters?.every((filter) => {
      return (
        item.role == filter || item.level == filter || item.tools.includes(filter) || item.languages.includes(filter)
      );
    });
  });

  console.log(selectedFilters);


  return ( 
    <div>
      <Header/>
        {/* Filter body */}
        {
          selectedFilters.length !== 0 &&
          <div>
            <div>
              {selectedFilters.map( (filter, index) => (
                <div key={index}>
                  <div>{filter}</div>
                  <div 
                     onClick={() => setSelectedFilters((prevFilters) => prevFilters?.filter((element) => element !== filter))}  
                  >
                    <img src="./images/icon-remove.svg" alt="" />
                  </div>
                </div>

              ))}

            </div>

            <div onClick={() => setSelectedFilters([])}>
              clear
            </div>
          </div>
        }


        <div>
          { selectedFilters ? (
            filteredData.map( (item, index) => (
              <Slide
              key={index}
                company={item.company}
                logo={item.log}
                news={item.news}
                featured={item.featured}
                position={item.position}
                postedAt={item.postedAt}
                contract={item.contract}
                level={item.level}
                role={item.role}
                location={item.location}
                languages={item.languages}
                tools={item.tools}
                onFilterClick={handleFilter}
              />
            ))
          )

          :
          data.map((item, index) => (
            <Slide
              key={index}
              company={item.company}
              logo={item.log}
              news={item.news}
              featured={item.featured}
              position={item.position}
              postedAt={item.postedAt}
              contract={item.contract}
              level={item.level}
              role={item.role}
              location={item.location}
              languages={item.languages}
              tools={item.tools}
              onFilterClick={handleFilter}
            />
          ))
          }
        </div>
    </div>
   );
}
 
export default App;