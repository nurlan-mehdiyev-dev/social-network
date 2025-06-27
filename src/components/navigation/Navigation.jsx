import { Link } from "react-router";

export default function Navigation() {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/profile">My profile</Link>
            </li>

            <li>
                <Link to="/profile/messages">InBox</Link>
            </li>

             <li>
                <Link to="/profile/notifications">Notifications</Link>
            </li>

        </nav>
    );
}