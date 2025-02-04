import { Button, MenuItem, MenuList, Select, TextField } from "@mui/material";

import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();
  const formValues = {};
  const handleChange = (e) => {
    formValues[e.target.name] = e.target.value;
    console.log(formValues);
  };

  const handleCalc = (operation, num1, num2) => {
    console.log(formValues);

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        setResult(num1 / num2);
        break;
      default:
        setResult("Invalid operation");
        break;
    }
  };
  return (
    <div className="App">
      <section className="main-wrapper">
        <div className="content">
          <h1>Калькулятор</h1>
          <TextField
            required
            name={"num1"}
            onChange={handleChange}
            label={"Первое число"}
            type="number"
          />
          <TextField
            required
            onChange={handleChange}
            name={"num2"}
            label={"Второе число"}
            type="number"
          />
          <TextField
            select
            name={"operation"}
            onChange={handleChange}
            label={"Операция"}>
            <MenuItem value={"add"}>Сложение</MenuItem>
            <MenuItem value={"subtract"}>Вычитание</MenuItem>
            <MenuItem value={"multiply"}>Умножение</MenuItem>
            <MenuItem value={"divide"}>Деление</MenuItem>
          </TextField>
          {result && <span className="result-field">Результат: {result} </span>}
          <Button
            variant="contained"
            onClick={() => {
              handleCalc(
                formValues.operation,
                formValues.num1,
                formValues.num2
              );
            }}
            sx={{ marginTop: "auto" }}>
            Выполнить
          </Button>
        </div>
        <div className="content code-content">
          <h1>Код программы</h1>
          <code>
            <div className="line">
              <span className="line-number">1</span>{" "}
              <span className="line-text">
                &nbsp;{`function calculate(operation, num1, num2) {`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">2</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp; {`switch (operation) {`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">3</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "add":`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">4</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`return num1 + num2;`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">5</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "subtract":`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">6</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`return num1 - num2;`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">7</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "multiply":`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">8</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`return num1 * num2;`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">9</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "divide":`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">10</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`return num1 / num2;`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">11</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`default:`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">12</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                {`return "Invalid operation";`}
              </span>
            </div>
            <div className="line">
              <span className="line-number">13</span>{" "}
            </div>
            <div className="line">
              <span className="line-number">14</span>{" "}
              <span className="line-text">&nbsp;&nbsp;&nbsp;{`}`}</span>
            </div>
            <div className="line">
              <span className="line-number">14</span>{" "}
              <span className="line-text">&nbsp;{`}`}</span>
            </div>
          </code>
        </div>
      </section>
    </div>
  );
}

export default App;

// function calculate(operation, num1, num2) {
//   switch (operation) {
//     case "add":
//       return num1 + num2;
//     case "subtract":
//       return num1 - num2;
//     case "multiply":
//       return num1 * num2;
//     case "divide":
//       return num1 / num2;
//     default:
//       return "Invalid operation";
//   }
// }
