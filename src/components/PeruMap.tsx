"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Departamento from "./Departamento";
import departamentos from "@/data/departamentos";

export default function PeruMap() {
    const [tooltip, setTooltip] = useState<{
        x: number;
        y: number;
        name: string;
    } | null>(null);

    return (
        <div className="w-full h-full relative">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 606 856"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {departamentos.map((departamento) => (
                    <Departamento
                        key={departamento.slug}
                        name={departamento.name}
                        slug={departamento.slug}
                        path={departamento.path}
                        x={departamento.x}
                        y={departamento.y}
                        setTooltip={setTooltip}
                    />
                ))}
            </svg>

            {/* Tooltip rendered directly in the body (portal) */}
            {tooltip &&
                createPortal(
                    <div
                        className="absolute pointer-events-none bg-black text-white text-xs px-2 py-1 rounded-lg shadow-lg z-[1000]"
                        style={{
                            top: tooltip.y, // Slight offset to avoid overlap with the cursor
                            left: tooltip.x + 20,
                        }}
                    >
                        {tooltip.name}
                    </div>,
                    document.body
                )}
        </div>
    );
}
