'use client'
import { RiCloseLine } from '@remixicon/react'
import { useSheetOpenStore } from '@/features/services/store/sheetOpen'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { StepContainer } from '@/features/cart/components/StepContainer'
import { useCartStore } from '@/features/cart/store/cart'

export default function SheetServices() {
	const { isSheetOpen, setIsSheetOpen } = useSheetOpenStore()
	const { reset } = useCartStore()

	const handleSheetClose = () => {
		setIsSheetOpen(false)
		reset()
	}

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetContent side="bottom" className="h-[85vh] p-0">
				<div className="h-full overflow-y-auto">
					<SheetHeader className="sticky top-0 bg-background border-b p-4 z-10">
						<div className="flex items-center justify-between">
							<SheetTitle></SheetTitle>
							<Button
								variant="ghost"
								size="icon"
								onClick={handleSheetClose}
							>
								<RiCloseLine className="h-5 w-5" />
							</Button>
						</div>
					</SheetHeader>
					<div className="p-4">
						<StepContainer />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export { SheetServices }
