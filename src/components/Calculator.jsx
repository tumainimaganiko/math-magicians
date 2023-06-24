import { useState } from "react";
import styles from "styles/Calculator.module.css";
import Span from "./Span";

export default function Calculator() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const heading = {
    padding: "20px",
  };

  return (
    <div className={styles.container}>
      <h2 style={heading}>Let&apos;s do some Math!</h2>
      <div className="container">
        <div className="display">{obj.next || obj.total || "0"}</div>
        <Span obj={obj} setObj={setObj} text="AC" color="white" />
        <Span obj={obj} setObj={setObj} text="+/-" color="white" />
        <Span obj={obj} setObj={setObj} text="%" color="white" />
        <Span obj={obj} setObj={setObj} text="÷" color="yellow" />
        <Span obj={obj} setObj={setObj} text="7" color="white" />
        <Span obj={obj} setObj={setObj} text="8" color="white" />
        <Span obj={obj} setObj={setObj} text="9" color="white" />
        <Span obj={obj} setObj={setObj} text="x" color="yellow" />
        <Span obj={obj} setObj={setObj} text="4" color="white" />
        <Span obj={obj} setObj={setObj} text="5" color="white" />
        <Span obj={obj} setObj={setObj} text="6" color="white" />
        <Span obj={obj} setObj={setObj} text="-" color="yellow" />
        <Span obj={obj} setObj={setObj} text="1" color="white" />
        <Span obj={obj} setObj={setObj} text="2" color="white" />
        <Span obj={obj} setObj={setObj} text="3" color="white" />
        <Span obj={obj} setObj={setObj} text="+" color="yellow" />
        <Span obj={obj} setObj={setObj} text="0" color="zero white" />
        <Span obj={obj} setObj={setObj} text="." color="white" />
        <Span obj={obj} setObj={setObj} text="=" color="yellow" />
      </div>
    </div>
  );
}
