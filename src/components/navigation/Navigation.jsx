import { Link } from "react-router";

export default function Navigation() {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
        </nav>
    );
}