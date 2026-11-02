import { PageHeader } from "../components/showcase/PageHeader"
import { ShowcaseSection } from "../components/showcase/ShowcaseSection"

// Volledige klassenamen staan vast in de code. Zie uitleg hieronder.
const brandShades = {
    50: "bg-brand-50",
    100: "bg-brand-100",
    200: "bg-brand-200",
    300: "bg-brand-300",
    400: "bg-brand-400",
    500: "bg-brand-500",
    600: "bg-brand-600",
    700: "bg-brand-700",
    800: "bg-brand-800",
    900: "bg-brand-900",
}

export function TokensPage() {
    return (
        <>
            <PageHeader
                title="Design tokens"
                description="De bouwstenen van Slagvast: kleur, typografie en radius."
            />

            <ShowcaseSection title="Brandkleur" description="Gedefinieerd in styles/theme.css.">
                {Object.entries(brandShades).map(([shade, className]) => (
                    <div key={shade} className="w-16 text-center">
                        <div className={`h-16 rounded-lg ${className}`} />
                        <span className="mt-1 block text-xs text-slate-600">{shade}</span>
                    </div>
                ))}
            </ShowcaseSection>

            <ShowcaseSection title="Typografie">
                <div className="w-full space-y-2">
                    <p className="text-4xl font-bold">Kop 4xl</p>
                    <p className="text-2xl font-semibold">Kop 2xl</p>
                    <p className="text-base">Lopende tekst base</p>
                    <p className="text-sm text-slate-600">Kleine tekst sm</p>
                </div>
            </ShowcaseSection>

            <ShowcaseSection title="Radius">
                <div className="h-16 w-16 rounded-sm bg-brand-200" />
                <div className="h-16 w-16 rounded-lg bg-brand-200" />
                <div className="h-16 w-16 rounded-xl bg-brand-200" />
                <div className="h-16 w-16 rounded-full bg-brand-200" />
            </ShowcaseSection>
        </>
    )
}