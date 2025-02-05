import { Button, MenuItem, TextField } from "@mui/material";

import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();
  const [formValues, setValues] = useState({
    num1: Number(0),
    num2: Number(0),
    operation: String("default"),
  });
  const [calcing, setClcing] = useState(false);
  const childIdToProcess = [3, 5, 7, 9, 11];
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const clearfromStyle = (childNode) => {
    return childNode.forEach((itm, ind) => {
      itm.className = "line";
    });
  };

  const calcVisual = async () => {
    setClcing(true);
    const childNode = document.getElementById("code").childNodes;
    clearfromStyle(childNode);
    for (let i = 0; i < childNode.length; i++) {
      //вытащим нужные элементы из массива детей
      const child = childNode[i];
      const childText = child.innerHTML;
      const childId = Number(child.id);
      //Поставим предострочку, что бы стили менялись не резко
      await wait(500);
      //Добавим стиль процесса
      child.classList.add("correct");
      await wait(500);

      if (childIdToProcess.includes(childId)) {
        child.classList.remove("correct");
        await wait(500);
        child.classList.add("process");
        await wait(1000);
        child.classList.remove("process");
        await wait(1000);
        if (childText.includes(formValues.operation)) {
          child.classList.add("correct");
          childNode[i + 1].classList.add("correct");
          return setClcing(false);
        } else {
          child.classList.add("error");
          await wait(1000);
          child.classList.remove("error");
          i++;
        }
      }
      child.classList.remove("correct");
    }
  };

  const handleChange = (e) => {
    const FieldName = e.target.name;
    const FieldValue = e.target.value;
    formValues[FieldName] = FieldValue;
    console.log(formValues);
  };

  const handleCalc = (operation, num1, num2) => {
    console.log(formValues);

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        calcVisual();
        break;
      case "subtract":
        setResult(num1 - num2);
        calcVisual();
        break;
      case "multiply":
        setResult(num1 * num2);
        calcVisual();
        break;
      case "divide":
        setResult(num1 / num2);
        calcVisual();
        break;
      default:
        setResult("Invalid operation");
        calcVisual();
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
          {!calcing && result && (
            <span className="result-field">
              Результат:{" "}
              {(typeof result == Number && result.toFixed(2)) || result}{" "}
            </span>
          )}
          <Button
            variant="contained"
            disabled={calcing}
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
          <code id={"code"}>
            <div className="line" id={1}>
              <span className="line-number">1</span>{" "}
              <span className="line-text">
                &nbsp;{`function calculate(operation, num1, num2) {`}
              </span>
            </div>
            <div className="line" id={2}>
              <span className="line-number">2</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp; {`switch (operation) {`}
              </span>
            </div>
            <div className="line" id={3}>
              <span className="line-number">3</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "add":`}
              </span>
            </div>
            <div className="line" id={4}>
              <span className="line-number">4</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`break num1 + num2;`}
              </span>
            </div>
            <div className="line" id={5}>
              <span className="line-number">5</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "subtract":`}
              </span>
            </div>
            <div className="line" id={6}>
              <span className="line-number">6</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`break num1 - num2;`}
              </span>
            </div>
            <div className="line" id={7}>
              <span className="line-number">7</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "multiply":`}
              </span>
            </div>
            <div className="line" id={8}>
              <span className="line-number">8</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`break num1 * num2;`}
              </span>
            </div>
            <div className="line" id={9}>
              <span className="line-number">9</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`case "divide":`}
              </span>
            </div>
            <div className="line" id={10}>
              <span className="line-number">10</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`break num1 / num2;`}
              </span>
            </div>
            <div className="line" id={11}>
              <span className="line-number">11</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`default:`}
              </span>
            </div>
            <div className="line" id={12}>
              <span className="line-number">12</span>{" "}
              <span className="line-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                {`break "Invalid operation";`}
              </span>
            </div>
            <div className="line" id={13}>
              <span className="line-number">13</span>{" "}
            </div>
            <div className="line" id={14}>
              <span className="line-number">14</span>{" "}
              <span className="line-text">&nbsp;&nbsp;&nbsp;{`}`}</span>
            </div>
            <div className="line" id={15}>
              <span className="line-number">15</span>{" "}
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
