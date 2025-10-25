'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { RiMenuLine } from '@remixicon/react'
import { cn } from "@/lib/utils"
import { MENU_LOGGED_IN } from '@/shared/utils/constants'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function MobileNavigation() {
    const pathname = usePathname()
    return (
        <div className="flex md:hidden items-center justify-between w-full">
            <a href='/'>
                <Image
                    src="https://res.cloudinary.com/dtzcyvuqi/image/upload/v1760590312/kioskopago_avnvtf.svg"
                    alt="Logo Kioskopago"
                    height={60}
                    width={180}
                />
            </a>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <RiMenuLine className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-4">
                    <nav className="flex flex-col gap-4 mt-8">
                        {MENU_LOGGED_IN.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary py-2",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export { MobileNavigation }