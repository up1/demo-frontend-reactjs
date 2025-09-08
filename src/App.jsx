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
      <h1 data-testid="message_text" style={{ color: "green" }}>Call REST API 2025/09/08 fix bug !!</h1>
      <center>
        <div
          data-testid="message_box"
          style={{
            width: "15em",
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          <p data-testid="hello_text" style={{ fontSize: 20, color: 'white' }}>{data.message}</p>
        </div>
      </center>
    </div>
  );
}

export default App;
