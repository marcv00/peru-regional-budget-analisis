// app/[slug]/page.tsx
import departamentos from "@/data/departamentos";
import { notFound } from "next/navigation";

// Generar rutas estáticas para cada departamento (SSG)
export function generateStaticParams() {
    return departamentos.map((dep) => ({ slug: dep.slug }));
}

// Página para cada departamento
export default async function DepartamentoPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const departamento = departamentos.find((dep) => dep.slug === slug);

    if (!departamento) {
        // Si el departamento no existe, mostrar 404
        notFound();
    }

    return (
        <main className="p-8 h-full">
            <h1 className="text-3xl font-bold">{departamento.name}</h1>
            <p className="mt-4">
                Bienvenido a la página de {departamento.name}.
            </p>
        </main>
    );
}
