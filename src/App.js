import React, { useEffect } from "react";
import Card from "./components/Card";
// import Aos from "aos"
// import "aos/dist/aos.css"

function App() {
  // useEffect(() => {
  // Aos.init({duration: 2000})
  // }, [])
  return (
    <div className="App">
      <main>
        <h1>Testing Scroll Animations</h1>
        <Card />
      </main>
    </div>
  );
}

export default App;
