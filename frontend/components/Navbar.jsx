import { Link } from "react-router-dom";
import { pageData } from "./PageData";

export function Navbar() {
    return (
        <div className="navbar">
            {pageData.map((page, index) => (
                <Link key={index} to={page.path}>
                    <button>{page.name}</button>
                </Link>
            ))}
        </div>
    );
}
