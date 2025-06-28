import { useState } from "react";
import { Link } from "react-router";
import style from "./Navigation.module.scss";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className={style.navigation}>
            <nav>
                <li>
                    <span onClick={toggleMenu}>
                        <img className={style.menu} src="https://cdn-icons-png.flaticon.com/128/15682/15682780.png" alt="menu"
                        />
                    </span>
                </li>

                <li>
                    <Link to="/timeline">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/1555/1555671.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/3106/3106773.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/notifications">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/3239/3239952.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/messages">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/10322/10322349.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/friends">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/4175/4175032.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/groups">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/4603/4603826.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/settings">
                        <span>
                            <img className={style.buttons} src="https://cdn-icons-png.flaticon.com/128/126/126472.png" alt="" />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/logout">
                        <span>
                            <img className={style.logout} src="https://cdn-icons-png.flaticon.com/128/4294/4294499.png" alt="" />
                        </span>
                    </Link>
                </li>
            </nav>
        </div>
    );
}
