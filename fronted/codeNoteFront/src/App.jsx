import axios from "axios";
import { createContext, useState } from "react";
import SomeComponent from "./SomeComponent";

export const FetchDataContext = createContext(null);
export default function App() {
  const [fetchData, setFetchData] = useState([]);
  const createPage = () => {
    const sanmefunc = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/tasks");
        setFetchData([...data]);
      } catch (error) {
        console.log(error);
      }
    };
    sanmefunc();
  };
  return (
    <FetchDataContext.Provider value={fetchData}>
      <div className="App">
        <button onClick={() => createPage()}>get data</button>
        <SomeComponent/>
      </div>
    </FetchDataContext.Provider>
  );
}
