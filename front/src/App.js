// React imports
import { useState } from "react";

// Local imports
import logo from "./img/logo.png";
import queries from "./config/queries";

// Styles
import "./App.css";

const App = () => {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);

  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <nav>
        {queries.map((query) => (
          <div
            onClick={() => {
              setSelectedQueryIndex(queries.indexOf(query));
            }}
            className={
              queries.indexOf(query) === selectedQueryIndex
                ? "navBtn navBtnSelected"
                : "navBtn"
            }
          >
            Consulta {queries.indexOf(query) + 1}
          </div>
        ))}
      </nav>
      <div className="content">
        <div className="contentContainer">
          <div className="contentHeader">
            <h1 className="contentTitle">Consulta {selectedQueryIndex + 1}</h1>
            <h2 className="descriptionTitle">Descripción de la consulta:</h2>
            <p className="description">
              {queries[selectedQueryIndex].description}
            </p>
          </div>
          <div className="queriesContainer">
            <div className="contentSubsection contentSubsection1"></div>
            <div className="contentSubsection contentSubsection2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
