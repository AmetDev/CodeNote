import SearchBar from "../Components/Search";
import Navbar from "../Components/Navbar";
import Card from "../Components/Cards";
import '../styles/Home.css';
function Home() {
    
    return (
      <div className="home">
        <div className="container">
            <div className="search">
                {<SearchBar />}
            </div>
            <div className="navbar">
                {<Navbar />}
            </div>
            <div className="div_cards">
              {<Card />}
            </div>
        </div>
      </div>
    );
  }
  export default Home;