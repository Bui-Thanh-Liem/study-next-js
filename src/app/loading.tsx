import classes from "./page.module.css";

// Loading in child of layout page
export default function LoadingPage() {
    return <p className={classes["loading"]}>🌀 Loading children layout global...</p>;
}
