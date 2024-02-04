import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const url = "https://demo-backend-nodejs.vercel.app/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Call REST API</h1>
      <center>
        <div
          style={{
            width: "15em",
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          <p style={{ fontSize: 20, color: 'white' }}>{data.message}</p>
        </div>
      </center>
    </div>
  );
}

export default App;