import { useEffect } from "react"

const Index = () => {

    useEffect(() => {
        document.title = "Home | MovieDB"
    }, [])

    return (
        <h1>Welcome</h1>
    )
}

export default Index