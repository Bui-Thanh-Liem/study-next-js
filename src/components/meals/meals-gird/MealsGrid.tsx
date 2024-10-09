// 

// 
import { IMeal } from "@/interfaces/modal.interface"
import classes from './MealsGrid.module.css';
import MealItem from "../meals-item/MealsItem";

// 
interface IPropsMealsGrid {
    meals: Array<IMeal>
}

export default function MealsGrid({meals}: IPropsMealsGrid) {
    return <ul className={classes.meals}>
        {meals?.map(meal => <li key={meal.id}>
            <MealItem meal={meal} />
        </li>)}
    </ul>
}