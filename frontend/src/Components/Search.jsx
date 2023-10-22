function SearchBar({ filterText }) {
    return (
      <form>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 26.0001L19.0707 19.0707M19.0707 19.0707C20.9461 17.1953 21.9997 14.6517 21.9997 11.9994C21.9997 9.34713 20.9461 6.8035 19.0707 4.92807C17.1952 3.05263 14.6516 1.99902 11.9993 1.99902C9.34707 1.99902 6.80343 3.05263 4.928 4.92807C3.05256 6.8035 1.99895 9.34713 1.99895 11.9994C1.99895 14.6517 3.05256 17.1953 4.928 19.0707C6.80343 20.9462 9.34707 21.9998 11.9993 21.9998C14.6516 21.9998 17.1952 20.9462 19.0707 19.0707Z" stroke="#18191C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..."/>
      </form>
    );
  }
  export default SearchBar;