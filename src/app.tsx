import React, { useState } from "react"
import { SchoolList } from "./components/school-list"

export const App = () => {
    // const [counters, setCounters] = useState<number[]>
    
    // return <h1 onClick={()=> {
    //     setCounters(counters[] + 1, ..counters)
    // }}>Hello World! Counter: {counters.join(',')}</h1>

    return <SchoolList/>
}