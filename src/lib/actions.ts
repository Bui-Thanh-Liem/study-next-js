// 
import { redirect } from "next/navigation";

// 
import { saveMeal } from "./meals";

export async function ShareMeal(formData: FormData) {
    "use server";
    const meal: any = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };
    await saveMeal(meal);
    redirect("/meals");
}