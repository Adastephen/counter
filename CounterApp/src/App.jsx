import { useState } from 'react'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(0)
    }
  }
  const reset = () => {
    if (count !== 0) {
      setCount(0)
    }
  }
  return (
    <>
    <h1 className="classTitle">Counter App</h1>
    <div className="counter">
      <h2 className="counting">{count}</h2>
      <button className="increment" onClick={increment}>+</button>
      <button className="decrement" onClick={decrement}>-</button>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default App
