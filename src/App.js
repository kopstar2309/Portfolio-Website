import React from "react";
// import MainScreen from "./screen/MainScreen";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <footer>{/* <MainScreen /> */}</footer>
    </main>
  );
}

export default App;
