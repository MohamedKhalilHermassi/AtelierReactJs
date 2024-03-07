import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Products(props) {
    
    const [count, setCount] = useState(0)
    const [test,setTest] = useState(0)
    
    useEffect(() => {
        console.log('I m rendering 1')
        console.log(count)
        return ()=> { console.log("I m unmouting")}
    }, [])

    useEffect(() => {
        console.log('I m rendering 2')
        console.log(count)
    }, [count])
    
    useEffect(() => {
        console.log('I m rendering 3')
        console.log(count)
    })

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const navigate = useNavigate();
    
    const VersEventsPage = ()=> {
        navigate('/events')
    }

    console.log(count)
    console.log(props)
    return (
        <>
            <h1>Hello from functional component</h1>
            <button onClick={()=>setTest(test+1)}>Changer test</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {count}
            <button onClick={VersEventsPage}>Navigate to Events page</button>
        </>
    )
}