import React from "react";

type HeroTitleProps = {
    text?: string;
    children?: React.ReactNode;
};

export default function HeroTitle({ text, children }: HeroTitleProps) {
    return (
        <div className="flex flex-col space-y-4">
            <div className=" mx-auto">
                <h1 className="text-[3rem] font-bold text-center leading-[3rem]">
                    {text}
                    {children}
                </h1>
            </div>
        </div>
    );
}
