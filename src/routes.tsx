import type { ReactNode } from "react"
import { HomePage } from "./pages/HomePage"
import { TokensPage } from "./pages/TokensPage"
import { ButtonPage } from "./pages/ButtonPage"

type PageRoute = {
    path: string
    label: string
    group: "Start" | "Basis" | "Componenten"
    element: ReactNode
}

export const pageRoutes: PageRoute[] = [
    { path: "/", label: "Introductie", group: "Start", element: <HomePage /> },
    { path: "/tokens", label: "Design tokens", group: "Basis", element: <TokensPage /> },
    { path: "/components/button", label: "Button", group: "Componenten", element: <ButtonPage /> },
]