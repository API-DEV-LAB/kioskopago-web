import { create } from 'zustand'

interface SheetOpenState {
    isSheetOpen: boolean
    setIsSheetOpen: (isOpen: boolean) => void
    reset: () => void
}

export const useSheetOpenStore = create<SheetOpenState>((set) => ({
    isSheetOpen: false,
    setIsSheetOpen: (isOpen) => set({ isSheetOpen: isOpen }),
    reset: () =>
        set({
            isSheetOpen: false,
        }),
}))
