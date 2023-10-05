import axios from "axios";
export default function App() {
    const createPage = () => {
      const sanmefunc = async () => {
        try {
          const axData = axios.get("http://localhost:8080/tasks");
          console.log(axData);
        } catch (error) {
          console.log(error);
        }
      };
      sanmefunc();
    };
    return (
      <div className="App">
        <button onClick={() => createPage()}>CREATE</button>
      </div>
    );
  }
  