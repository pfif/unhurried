import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { auth, getTokenFromAuth } from "./authentication";

function App() {
  const [token, setToken] = useState(getTokenFromAuth(auth));

  useEffect(() => {
    const onAuth = (error, { provider }) => {
      if (error) {
        console.error(error);
        // TODO: HANDLE ERROR
        return;
      }

      setToken(getTokenFromAuth(auth));
    };

    auth.on("login", onAuth);
    auth.on("logout", onAuth);
  }, []);

  console.log(token);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p
          onClick={() => {
            auth.login("spotify");
          }}
        >
          Token
        </p>
      </header>
    </div>
  );
}

export default App;
