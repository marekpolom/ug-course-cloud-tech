import React from "react";

const signTrans = (x) => {
  switch (x) {
    case "ADD":
      return "+";
    case "SUB":
      return "-";
    case "MULT":
      return "*";
    case "DIV":
      return "/";
    default:
      return "";
  }
};

const CalcRes = ({ calcRes }) => {
  return (
    <div className="calc-res-cont">
      <h2>CALCULATION RESULT</h2>
      <p className="calc-res-result-cont">
        {calcRes.a ? parseFloat(calcRes.a) : ""}
        {"\u00A0"}
        {signTrans(calcRes.type)}
        {"\u00A0"}
        {calcRes.b ? parseFloat(calcRes.b) : ""}
        {"\u00A0"}
        {calcRes ? "=" : ""}
        {"\u00A0"}
        {calcRes.result}
      </p>
    </div>
  );
};

export default CalcRes;
