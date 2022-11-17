import { Fragment, useEffect } from "react";

const GenerateLine = () => {
  const lineGenerate = (n: number) => {
    let num = n;
    let string = "";
    for (let i = 0; i <= num; i++) {
      for (let j = 0; j < num - i; j++) {
        string += "*";
      }
      for (let k = 0; k < i * 2; k++) {
        string += " ";
      }
      for (let l = num - i; l > 0; l--) {
        string += "*";
      }
      string += "\n";
    }
  };
  lineGenerate(50);

  return <Fragment></Fragment>;
};
export default GenerateLine;
