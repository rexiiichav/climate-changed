import { useState, useEffect } from "react";

export default function LiveUpdate({ tracker, addend }) {
  let [number, setNumber] = useState(addend);

  useEffect(() => {
    const interval = setInterval(() => {
      let newNum = number + addend;
      newNum = Math.round(newNum * 1000) / 1000;
      setNumber(newNum);
    }, 1000);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div>
      <p
        style={{ fontSize: "1.7rem", textAlign: "center" }}
      >{`${number} ${tracker} Since Coming to this Page`}</p>
    </div>
  );
}
