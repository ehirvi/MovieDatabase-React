import { Outlet, Link } from "react-router-dom"

const Root = () => {
    return (
        <>
            <nav className="nav-bar">
                <Link to={"/"}>Home</Link>
                <Link to={"/movies"}>Movies</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Root