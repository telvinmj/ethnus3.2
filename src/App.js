import Keypad from "./keypad"

import './App.css'
import { useState } from "react"

function App() {


      let [input, setInput] = useState("")
      let [input1, setInput1] = useState("")
      function handleClick(value) {

            setInput(input + value)

      }
      function calculate(value) {
            setInput1(input);
            let outputVal = eval(input)
            setInput(outputVal);

      }
      function handleClear() {

            setInput("");
            setInput1("");

      }

      return (
            <div className="container">
                  <div className="calculator">
                        <input type="text" value={input1} className="output1" readOnly />
                        <input type="text" value={input} className="output" readOnly />
                        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>

                  </div>

            </div>
      )
}

export default App