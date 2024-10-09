//
import Link from "next/link";
import Image from "next/image";

//
import classes from "./MealsItem.module.css";
import { IMeal } from "@/interfaces/modal.interface";
import imageTest from "/public/images/logo.png";

//
interface IPropsMealItem {
    meal: IMeal;
}

//
export default function MealItem(props: IPropsMealItem) {
    const { meal } = props;
    const { image, price, creator, slug, summary, title } = meal;

    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={image as string} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}
