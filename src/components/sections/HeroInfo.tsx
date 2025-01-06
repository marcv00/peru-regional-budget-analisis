import React from "react";
import HeroTitle from "../texts/HeroTitle";
import HeroDescription from "../texts/HeroDescription";

type HeroInfoProps = {};

export default function HeroInfo({}: HeroInfoProps) {
    return (
        <div className="w-1/2">
            <div className="w-[95%] mx-auto">
                <HeroTitle>
                    El Perú en Cifras: <br />
                    ¿Cómo Transformamos el Presupuesto en Progreso?
                </HeroTitle>
                <div className="h-8"></div>
                <HeroDescription>
                    En el Perú, las desigualdades entre regiones son evidentes,
                    y surge una pregunta importante: ¿el presupuesto público
                    realmente impulsa el desarrollo económico en cada rincón del
                    país? Este proyecto busca explorar esa relación de una
                    manera clara y directa, utilizando datos y visualizaciones
                    para contar historias que a veces no se ven a simple vista.
                    <br />
                    <br />
                    ¿Por qué algunas regiones logran más con menos presupuesto?
                    ¿Qué impacto tienen sectores como la educación o la
                    infraestructura en la calidad de vida? ¿La descentralización
                    ha ayudado a reducir las brechas entre regiones o
                    simplemente las ha trasladado? Estas son algunas de las
                    preguntas que guían esta iniciativa.
                </HeroDescription>
            </div>
        </div>
    );
}
