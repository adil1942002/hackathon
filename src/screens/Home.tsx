import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Home() {


    let navigate = useNavigate()
    let [test, setTest] = useState<any>()
console.log(test);

    // useEffect(() => {  }, [])
    return <>
        <h1>Home</h1>
    </>
}

