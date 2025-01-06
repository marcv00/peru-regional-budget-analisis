import React from "react";
import PeruMap from "../PeruMap";

type HeroMapProps = {};

export default function HeroMap({}: HeroMapProps) {
    return (
        <div className="w-1/2 ">
            <div className="w-[55%] mx-auto">
                <PeruMap />
            </div>
        </div>
    );
}
