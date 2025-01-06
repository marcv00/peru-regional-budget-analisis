import React from "react";
import Link from "next/link";

type FooterProps = {};

export default function Footer({}: FooterProps) {
    return (
        <footer className="text-gray-500 py-4 text-[.7rem]">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="spacebar h-[2px] w-full bg-black"></div>
                    <div className="flex space-x-2">
                        <Link
                            href={"https://www.linkedin.com/in/marcovill/"}
                            target="_blank"
                            className="w-[18px]"
                        >
                            <img src="linkedin.svg" alt="LinkedIn Logo" />
                        </Link>
                        <Link
                            href={"https://github.com/marcv00"}
                            target="_blank"
                            className="w-[18px]"
                        >
                            <img src="github.svg" alt="GitHub Logo" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between space-y-1">
                    <p className="text-center">
                        La informacion presentada es recolectada de las
                        siguientes{" "}
                        <Link
                            href={
                                "https://github.com/marcv00/peru-regional-budget-analisis"
                            }
                            className="underline underline-offset-2"
                        >
                            fuentes
                        </Link>
                        .
                    </p>
                    <p className="text-center">
                        © 2025. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
