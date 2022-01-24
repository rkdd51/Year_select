import React, { useState } from "react";

const Test = () => {
  const obj = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008];
  const [op1, setOp1] = useState();
  const [op2, setOp2] = useState();

  const changeHandler = (e) => {
    setOp1(e.target.value);
  };
  const changeHandler2 = (e) => {
    setOp2(e.target.value);
  };
  return (
    <div>
      <select onChange={changeHandler}>
        {obj.map((yr) => {
          return <option value={yr}>{yr}</option>;
        })}
      </select>
      <select onChange={changeHandler2}>
        {obj.map((yr) => {
          return <option value={yr}>{yr}</option>;
        })}
      </select>
      {Math.abs(op2 - op1) > 5 && <div style={{ color: "red" }}>* max 5</div>}
    </div>
  );
};

export default Test;
