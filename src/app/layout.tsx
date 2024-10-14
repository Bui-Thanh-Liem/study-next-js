import { ReactElement } from "react";
import Header from "@/components/header/Header";
import "./globals.css";
import HeaderBackground from "@/components/header-background/HeaderBackGround";
import { ToastContainer } from "react-toastify";

export const metadata = {
    title: "NextLevel Food",
    description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: ReactElement }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <HeaderBackground />
                <Header />
                {children}
                <ToastContainer />
            </body>
        </html>
    );
}
