import { IMeal } from "@/interfaces/modal.interface";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: IMeal) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = (meal.image as File).name.split(".").pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);

    const bufferedImage = await (meal.image as File).arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Upload image failed: " + error?.message);
        }
    });

    meal.image = `/images/${filename}`;

    console.log("meal at lib meals:::", meal);

    db.prepare(
        `
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES
            (
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image,
                @slug
            )
    `
    ).run(meal);
}
