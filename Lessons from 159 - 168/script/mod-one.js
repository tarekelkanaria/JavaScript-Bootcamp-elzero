import { a, b, c } from "./mod-two.js";
export default function (numOne = a, numTwo = b, numThree = c) {
  return numOne + numTwo + numThree;
}
