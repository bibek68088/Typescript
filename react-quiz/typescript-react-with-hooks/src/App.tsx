import { useState, useEffect, useCallback, useMemo, MouseEvent , KeyboardEvent, useRef} from 'react'
interface User{
  id: number,
  username: string,
}
/**To show the useage of useMemo */
type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number  = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)
  
  useEffect(() => {
    console.log('mounting')
    console.log("Users:", users)


    return() => console.log('unmounting')
  },[users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | 
    KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2),[])

    const result = useMemo<number>(() => fib(myNum),[myNum] )

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default App
