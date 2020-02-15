import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";

const Header = () => {
    return(
        <div className={headerStyles.header}>
            <div className={headerStyles.logoArea}>
                <Link className={headerStyles.title} to="/">
                    <h1>Placy</h1>
                </Link>
            </div>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.navList}>
                    <li className={headerStyles.listItem} activeClassName={headerStyles.activeNavItem}>
                        <Link className={headerStyles.link} to="/about">about</Link>
                    </li>
                    <li className={headerStyles.listItem} activeClassName={headerStyles.activeNavItem}>
                        <Link className={headerStyles.link} to="/careers">careers</Link>
                    </li>
                    <li className={headerStyles.listItem} activeClassName={headerStyles.activeNavItem}>
                        <Link className={headerStyles.link} to="/consulting">consulting</Link>
                    </li>
                    <li className={headerStyles.listItem} activeClassName={headerStyles.activeNavItem}>
                        <Link className={headerStyles.link} to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header