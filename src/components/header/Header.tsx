"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";
import classes from "./Header.module.css";
import NavLink from "../nav-link/NavLink";

export default function Header() {

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logo} alt="Home" priority quality={100} />
                NextLevel Food
            </Link>
            <ul className={classes.nav}>
                <NavLink
                    href="/meals"
                >
                    Browse Meals
                </NavLink>
                <NavLink
                    href="/community"
                >
                    Foodies Community
                </NavLink>
            </ul>
        </header>
    );
}
