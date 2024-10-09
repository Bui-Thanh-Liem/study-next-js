"use client";
//
import { ChangeEvent, useRef, useState } from "react";

//
import classes from "./ImagePicker.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Timer } from "../timer/Timer";

export const ImagePicker = ({ label, name }: { label: string, name: string }) => {
    const [imagePreview, setImagePreview] = useState<
        string | ArrayBuffer | null | StaticImport
    >();
    const refInput = useRef<any>();

    //
    function handleClickPick() {
        refInput.current.click();
    }

    //
    const handleChangePick = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files || [];

        if (!file) {
            setImagePreview(null);
            return;
        }

        // Sử dụng api của js để đọc file (image,text, ...) 
        const fileReader = new FileReader();
        fileReader.onload = () => { // Khi tải file lên đọc thì kết quả gán lại cho imagePreview
            setImagePreview(fileReader.result);
        };
        fileReader.readAsDataURL(file[0]);  // Bắt đầu đọc file
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!imagePreview && <p>No image piker yet.</p>}
                    {imagePreview && (
                        <Image
                            src={imagePreview as any}
                            alt="Image preview"
                            fill
                        />
                    )}
                </div>
                <input
                    ref={refInput}
                    className={classes.input}
                    id={name}
                    type="file"
                    accept="image/png, image/jpeg"
                    name={name}
                    multiple
                    onChange={handleChangePick}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handleClickPick}
                >
                    Pick a image
                </button>
            </div>

            <Timer getType={type => {}} getValue={value => {}}/>
        </div>
    );
};
