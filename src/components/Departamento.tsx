"use client";
import Link from "next/link";

type DepartamentoProps = {
    name: string;
    slug: string;
    path: string;
    fillColor?: string;
    x: number;
    y: number;
    setTooltip: (
        tooltip: { x: number; y: number; name: string } | null
    ) => void;
};

export default function Departamento({
    name,
    slug,
    path,
    fillColor = "white",
    x,
    y,
    setTooltip,
}: DepartamentoProps) {
    return (
        <Link href={`/${slug}`}>
            <g
                id={slug}
                tabIndex={0}
                transform={`translate(${x}, ${y})`}
                className="group focus:outline-none"
                onMouseMove={(e) =>
                    setTooltip({
                        x: e.clientX,
                        y: e.clientY,
                        name: name,
                    })
                }
                onMouseLeave={() => setTooltip(null)}
            >
                <path
                    d={path}
                    fill={fillColor}
                    stroke="black"
                    className="cursor-pointer transition-all duration-300 ease-in-out 
                            group-hover:scale-[100.6%]  group-hover:stroke-2 
                            group-hover:z-100 group-hover:fill-opacity-80 origin-bottom-left 
                            group-hover:fill-emerald-800 group-focus:scale-[100.6%]
                            group-focus:stroke-2 group-focus:z-100 group-focus:fill-opacity-80 
                            group-focus:fill-emerald-800"
                />
            </g>
        </Link>
    );
}
