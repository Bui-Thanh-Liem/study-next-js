"use client";

import { TimerDateHours } from "../timerDateHours/TimerDateHours";

export default function Footer() {
    const d = (val: string) => {
        console.log("date:::", val);
    }
    const t = (val: string) => {
        console.log("time:::", val);
    }
    return <footer>Footer
        <TimerDateHours getDate={d} getTime={t} />
    </footer>;
}
