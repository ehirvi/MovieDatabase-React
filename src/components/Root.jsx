import { Outlet, Link } from "react-router-dom"

const Root = () => {
    return (
        <>
            <nav className="nav-bar">
                    <Link to={"/"} className="nav-item">Home</Link>
                    <Link to={"/movies"} className="nav-item">Movies</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default Root