import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RiStore3Line } from "@remixicon/react"

export default function DashboardHeader() {
	return (
		<header className="bg-background border-b border-border sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
						<RiStore3Line className="w-5 h-5" />
					</div>
					<div>
						<h1 className="font-semibold text-sm md:text-base">
							Mi tienda.com
						</h1>
					</div>
				</div>

				<nav className="hidden md:flex items-center gap-1">
					<Button variant="ghost" size="sm" asChild>
						<Link
							href="/dashboard"
							className="flex items-center gap-2"
						>
							Inicio
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href="/historial"
							className="flex items-center gap-2"
						>
							Historial
						</Link>
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link
							href="/perfil"
							className="flex items-center gap-2"
						>
							Perfil
						</Link>
					</Button>
				</nav>

				<Button
					variant="ghost"
					size="icon"
					className="rounded-full md:hidden"
				></Button>
			</div>
		</header>
	)
}

export { DashboardHeader }
