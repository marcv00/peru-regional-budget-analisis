import React from "react";
import HeroInfo from "./HeroInfo";
import HeroMap from "./HeroMap";

export default function HeroWrapper() {
    return (
        <div className="flex items-center justify-center max-w-[1320px] mx-auto">
            <HeroMap />
            <HeroInfo />
        </div>
    );
}
