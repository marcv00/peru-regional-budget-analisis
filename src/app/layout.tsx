import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

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
        <html lang="en">
            <body
                className={`${raleway.variable} antialiased h-[100%] bg-blue-600`}
            >
                {children}
            </body>
        </html>
    );
}
