import React, { useEffect, useState } from "react";
import "./App.css";
import { Book } from "./components/book/index";
import { books } from "./data";

function App() {
  const [value, setVlue] = useState("");
  const [filterData, setFilterData] = useState([]);


  const handleSearch = (e) => {
    setVlue(e.target.value);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (value.length > 1) {
        const filterData = books.filter((book) => {
          return book.title.toLowerCase().includes(value.toLowerCase());
        });
        console.log("filterDta", filterData);
        setFilterData(filterData);
      }
    }, 800);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div
        className="appWrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "black",
          alignItems:"center",
          width: "100%",
        }}
      >
        <input
          value={value}
          onChange={(e) => {
            handleSearch(e);
          }}
          type="text"
          placeholder="Search a book..."
          style={{width:"20%",outline:"none",
        margin:"20px 0",padding:"8px",borderRadius:"8px"}}
        />
        {value.length === 0 ? (
          <div
            className="bookContainer"
            style={{ display: "flex", width: "100%",flexWrap:"wrap",overflowY:"scroll", justifyContent:"center"}}
          >
            {books.map((book) => (
              <Book key={book.id} title={book.title} image={book.image} />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              backgroundColor: "black",
              alignItems:"center",
              width: "100%",
              height:"100vh"
            
            }}
          >
            <h2 style={{color:"white"}}>search result</h2>
            {filterData.map((book) => (
              <Book  key={book.id} image={book.image} title={book.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
