"use client";

import classes from './page.module.css';

export default function ErrorPage({error}: {error: Error}) {
    const messageError = error.message;
    console.log("error:::", messageError);
    
    return <h1 className={classes.error}>Error page !</h1>
}