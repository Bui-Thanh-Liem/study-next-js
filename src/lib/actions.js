"use server";

//
import { redirect } from "next/navigation";

//
import { saveMeal } from "./meals";

//
function isInvalidText(text) {
    return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
    "use server";
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    // 
    console.log("prevState:::", prevState);
    

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        (!meal.image && meal.image.size === 0) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email)
    ) {
        return {
            message: "Invalid input",
        };
    }

    await saveMeal(meal);
    redirect("/meals");
}
