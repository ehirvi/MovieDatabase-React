import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    // console.error(error)

    return (
        <div className="error-page">
            <h1>Oops! An error has occured!</h1>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    )
}

export default ErrorPage