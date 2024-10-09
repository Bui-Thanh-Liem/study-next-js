import classes from "./loadingOut.module.css";

export default function LoadingPageMeals() {
    return <p className={classes["loading"]}>🌀 Fetching meals...</p>;
}
