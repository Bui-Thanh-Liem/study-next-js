"use client";

import classes from './page.module.css';

export default function ErrorPage({error}: any) {
    console.log("error:::", error);
    
    return <h1 className={classes.error}>Error page !</h1>
}