import SearchBar from "../Components/Search";
import Navbar from "../Components/Navbar";
function Home() {
    
    return (
      <div className="home">
        <div className="container">
           <div>
                {<Navbar />}
           </div>
            <div>
                {<SearchBar />}
            </div>
        </div>
      </div>
    );
  }
  export default Home;