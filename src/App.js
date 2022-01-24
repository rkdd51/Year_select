import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const obj = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008];
  const arr = [];
  let len = obj.length;
  const [current, setCurrent] = useState();
  const [next, setNext] = useState([]);
  const [val, setVal] = useState();
  useEffect(() => {
    console.log("hi");
  }, [current]);
  const selectHandler = (e) => {
    setCurrent(e.target.value);
    console.log(current);
    const index = (element) => element == current;
    let n = obj.findIndex(index);
    console.log("n", n);

    for (let i = n; i < len; i++) {
      arr.push(obj[i]);
    }
    console.log(arr);
    setNext(arr);
  };
  const nextHandler = (e) => {
    setVal(e.target.value);
    console.log(val);
  };
  return (
    <div className="App">
      {/* <select onChange={selectHandler}>
        {obj.map((y) => {
          return <option value={y}>{y}</option>;
        })}
      </select> */}
      <select onChange={selectHandler}>
        {obj.map((yr) => {
          return <option value={yr}>{yr}</option>;
        })}
      </select>
      <select onChange={nextHandler}>
        {next.map((yr, i) => {
          // i <= 5 && (
          // <div>
          return <option value={yr}>{yr}</option>;
          {
            /* </div> */
          }
          // );
        })}
      </select>
    </div>
  );
}
