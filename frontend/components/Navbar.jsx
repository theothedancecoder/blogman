import { Link } from "react-router-dom";
import { pageData } from "./PageData";
import { useNavigate } from "react-router-dom";

export function Navbar() {

    const navigate = useNavigate()

    function handleLogout (){
        sessionStorage.removeItem("user")
        navigate("/")

    }


    return (
        <div className="navbar">
            {pageData.map((page, index) => (
                <Link key={index} to={page.path}>
                    <button>{page.name}</button>
                </Link>
            ))}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}
