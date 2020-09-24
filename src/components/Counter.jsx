import React, {useState} from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
    const addClick = () => {
        setCount(count + 1)
    }
    const subClick = () => {
        setCount(count -1 )
    }
    return <>
        <h1>Counter : {count}</h1>
        <button onClick={addClick}> + </button>
        <button onClick={subClick}> - </button>
    </>
}
export default Counter
