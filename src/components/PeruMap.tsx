import Departamento from "./Departamento";
import departamentos from "@/data/departamentos";

export default function PeruMap() {
    return (
        <div className="w-[300px]">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 606 856"
                preserveAspectRatio="xMidYMid meet"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {departamentos.map((departamento) => (
                    <Departamento
                        key={departamento.name} // Use name as key
                        name={departamento.name}
                        path={departamento.path}
                        x={departamento.x}
                        y={departamento.y}
                    />
                ))}
            </svg>
        </div>
    );
}
