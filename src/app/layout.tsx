import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Analizando el presupuesto regional",
    description:
        "Analisis del impacto del presupuesto regional en el desarrollo.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light">
            <body
                className={`${raleway.variable} font-raleway antialiased h-screen flex flex-col justify-between`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
