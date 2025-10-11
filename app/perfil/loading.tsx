import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProfileLoading() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
			<div className="container mx-auto px-4 py-8">
				<Card className="max-w-3xl mx-auto shadow-lg">
					<CardHeader className="space-y-1">
						<div className="flex items-center justify-between">
							<div className="space-y-2">
								<Skeleton className="h-8 w-32" />
								<Skeleton className="h-4 w-48" />
							</div>
							<Skeleton className="h-9 w-24" />
						</div>
					</CardHeader>
					<CardContent className="space-y-6">
						{[1, 2, 3].map((section) => (
							<div key={section} className="space-y-4">
								<Skeleton className="h-6 w-48" />
								<div className="space-y-3">
									<Skeleton className="h-10 w-full" />
									<Skeleton className="h-10 w-full" />
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
