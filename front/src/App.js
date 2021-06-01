// React imports
import { useState } from "react";

// Local imports
import logo from "./img/logo.png";
import queries from "./config/queries";
import { Table } from "./components/Table.js";
import sampleResponse from "./config/sampleResponse";

// Styles
import "./App.css";

// Api-related
import axios from "axios";

// Custom calendars
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  // Const
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [doneQuery, setDoneQuery] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchById, setSearchById] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [queryResponse, setQueryResponse] = useState(sampleResponse);
  const [responseMsg, setResponseMsg] = useState(
    "Realiza la consulta para obtener un resultado"
  );

  // Functions
  const checkStr = (str) => {
    if (/^[a-zA-Z ]*$/.test(str)) {
      setInputValue(str);
    } else {
      setInputValue(str.substr(0, str.length - 1));
    }
  };

  const handleChangeQuery = (newIndex) => {
    setResponseMsg("Realiza la consulta para obtener un resultado");
    setSelectedQueryIndex(newIndex);
    setDoneQuery(false);
    setInputValue("");
  };

  const handleQuery = () => {
    setResponseMsg("Cargando...");
    let dataToPost = {};
    // Get input values
    if (
      queries[selectedQueryIndex].type === "departments" ||
      queries[selectedQueryIndex].type === "both"
    ) {
      dataToPost["departmentName"] = searchById ? "" : inputValue.trim();
      dataToPost["departmentId"] = searchById ? inputValue : 0;
    }
    if (
      queries[selectedQueryIndex].type === "dates" ||
      queries[selectedQueryIndex].type === "both"
    ) {
      let start = new Date(startDate);
      let end = new Date(endDate);
      dataToPost["startDate"] = `${start.getFullYear()}-${
        start.getMonth() < 10 ? `0${start.getMonth()}` : start.getMonth()
      }-${start.getDate() < 10 ? `0${start.getDate()}` : start.getDate()}`;
      dataToPost["endDate"] = `${end.getFullYear()}-${
        end.getMonth() < 10 ? `0${end.getMonth()}` : end.getMonth()
      }-${end.getDate() < 10 ? `0${end.getDate()}` : end.getDate()}`;
    }
    console.log(dataToPost);
    // Make query
    axios({
      method: "post",
      url: `localhost:3000/api/query${selectedQueryIndex + 1}`,
      data: {
        data: dataToPost,
      },
    })
      .then((response) => {
        setQueryResponse(response.data);
        setDoneQuery(true);
      })
      .catch((e) => {
        console.log(e);
        setResponseMsg("Error de conexión");
      });
  };

  const onlyuNumbers = (inputValue) => {
    const re = /^[1-7\b]+$/;
    if (inputValue === "" || re.test(inputValue)) {
      setInputValue(inputValue.charAt(inputValue.length - 1));
    }
  };

  // Render
  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <nav>
        {queries.map((query) => (
          <div
            onClick={() => {
              handleChangeQuery(queries.indexOf(query));
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
            <div className="contentSubsection contentSubsection1">
              <h1 className="subContainerTitle queryTitle">Consulta</h1>
              <div className="inputsContainer">
                {queries[selectedQueryIndex].type === "dates" ||
                queries[selectedQueryIndex].type === "both" ? (
                  <div className="inputContainer">
                    <h3 className="inputTitle">
                      Selecciona el rango de fechas
                    </h3>
                    <div className="datesContainer">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="dateInput"
                      />
                      <p className="a">a</p>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="dateInput"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {queries[selectedQueryIndex].type === "departments" ||
                queries[selectedQueryIndex].type === "both" ? (
                  <div className="inputContainer">
                    <h3 className="inputTitle">
                      Ingresa información sobre el departamento que buscas
                    </h3>
                    <p className="searchBy">Buscar por:</p>
                    <div className="toggleContainer">
                      <div
                        onClick={() => {
                          setSearchById(false);
                          setInputValue("");
                        }}
                        className={`toggleItem${
                          !searchById ? " toggleItemSelected" : ""
                        }`}
                      >
                        Nombre
                      </div>
                      <div
                        onClick={() => {
                          setSearchById(true);
                          setInputValue("");
                        }}
                        className={`toggleItem${
                          searchById ? " toggleItemSelected" : ""
                        }`}
                      >
                        ID
                      </div>
                    </div>
                    <input
                      onChange={(value) => {
                        if (searchById) {
                          onlyuNumbers(value.target.value);
                        } else {
                          checkStr(value.target.value);
                        }
                      }}
                      placeholder={`Ingresa el ${
                        searchById ? "ID" : "nombre"
                      } del departamento`}
                      className="input"
                      id="input"
                      value={inputValue}
                    />
                    {searchById ? (
                      <p className="reminder">
                        (Recuerda sólo ingresar un dígito del 1 al 7)
                      </p>
                    ) : (
                      <p className="reminder">
                        (Recuerda sólo ingresar letras sin acentos y espacios)
                      </p>
                    )}
                  </div>
                ) : (
                  <></>
                )}
                {queries[selectedQueryIndex].type === null ? (
                  <p className="noInputRequired">
                    La consulta {selectedQueryIndex + 1} no requiere input
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div
                className="submitBtn"
                onClick={() => {
                  handleQuery();
                }}
              >
                Hacer consulta
              </div>
            </div>

            <div className="contentSubsection contentSubsection2">
              <h1 className="subContainerTitle">Respuesta</h1>
              <div className="tableContainer">
                {doneQuery ? (
                  <Table
                    headers={queryResponse.columns}
                    data={queryResponse.rows}
                  ></Table>
                ) : (
                  <p>{responseMsg}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
