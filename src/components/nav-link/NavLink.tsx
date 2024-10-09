"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";
import { ReactNode } from "react";

export default function NavLink({children, href}: {children: ReactNode, href: string}) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={
                pathname.startsWith(`${href}`)
                    ? `${classes.active} ${classes.link}`
                    : classes.link
            }
        >
            {children}
        </Link>
    );
}
