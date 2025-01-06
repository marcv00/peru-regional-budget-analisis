"use client";
import React, { useState } from "react";
import Link from "next/link";
import departamentos from "@/data/departamentos";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-transparent h-[4rem]">
            <div className="max-w-[1320px] mx-auto flex flex-col justify-between h-full">
                <nav className=" flex h-full items-center justify-between relative">
                    <div className="logo w-[20%]">
                        <p>Peru en cifras</p>
                    </div>
                    <div
                        className="cursor-pointer flex flex-col justify-between w-[30px] h-[20px] overflow-visible"
                        onClick={toggleMenu}
                    >
                        <div className="h-[3px] bg-slate-900 "></div>
                        <div className="h-[3px] bg-slate-900 "></div>
                        <div className="h-[3px] bg-slate-900 "></div>
                    </div>
                    {isMenuOpen && (
                        <ul className="absolute top-[4rem] right-0 bg-white shadow-lg p-4 grid grid-cols-4 gap-4">
                            {departamentos.map((departamento) => (
                                <li key={departamento.slug}>
                                    <Link
                                        href={departamento.slug}
                                        className="text-black hover:text-red-500"
                                    >
                                        {departamento.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
                <div className="spacebar h-[2px] w-full bg-black"></div>
            </div>
        </header>
    );
}
