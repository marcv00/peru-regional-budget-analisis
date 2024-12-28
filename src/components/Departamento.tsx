"use client";
type DepartamentoProps = {
    name: string;
    path: string;
    fillColor?: string;
    x: number;
    y: number;
};

export default function Departamento({
    name,
    path,
    fillColor = "white",
    x,
    y,
}: DepartamentoProps) {
    const escapedName = name.replace(" ", "-").toLowerCase();
    return (
        <g
            id={escapedName}
            onClick={() => alert(`Region ${name} clickeada`)}
            transform={`translate(${x}, ${y})`}
            className="group" // Group class for hover effect
        >
            <path
                d={path}
                fill={fillColor}
                stroke="transparent" // Default stroke is transparent
                strokeWidth="2" // Always apply a stroke width
                className="cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-[100.6%] group-hover:stroke-red-700 group-hover:stroke-2 group-hover:z-100 group-hover:fill-opacity-80 origin-bottom-left" // Apply scaling, stroke color, z-index, and opacity on hover
            />
        </g>
    );
}
