import React, { useContext } from "react";
import { FetchDataContext } from "./App";
const SomeComponent = () => {
  const somedata = useContext(FetchDataContext);
  console.log(somedata);
  
  return (
    <ul>
      {somedata.map((el) => {
        const parser = new DOMParser();
        return (
          <div key={el.id}>
            {
                parser.parseFromString(el.description, "text/html").body //it string need to fix!!
              
            }
          </div>
        );
      })}
    </ul>
  );
};

export default SomeComponent;
