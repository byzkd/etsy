import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
        </div>
        {/* <div>
          <a
            href="https://wa.me/905415456780"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            Şimdi Sipariş Ver!
            <i
              style={{ marginLeft: "10px" }}
              class="fa fa-whatsapp whatsapp-icon"
            ></i>
          </a>
        </div> */}
      </Router>
    </DataProvider>
  );
}

export default App;
