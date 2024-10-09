import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-gird/MealsGrid";
import { getMeals } from "@/lib/meals";
import { IMeal } from "@/interfaces/modal.interface";
import { Suspense } from "react";
import LoadingPageMeals from "./loading-out";

const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals as Array<IMeal>} />
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun !
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<LoadingPageMeals />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}
