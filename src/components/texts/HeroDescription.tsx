import React, { ReactNode } from "react";

type HeroDescriptionProps = {
    text?: string;
    children?: ReactNode;
};

export default function HeroDescription({
    text,
    children,
}: HeroDescriptionProps) {
    return (
        <p className="leading-8 text-black text-[1rem] font-medium">
            {text} {children}
        </p>
    );
}
