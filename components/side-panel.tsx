import { Package, ShoppingBag, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface SidePanelProps {
    isOpen: boolean;
    onClose: () => void;
    activePage: string;
    setActivePage: (page: string) => void;
    isMobile: boolean;
}

export function SidePanel({ isOpen, onClose, activePage, setActivePage, isMobile }: SidePanelProps) {
    const NavLink = ({ href, onClick, children, isActive }) => (
        <a
            href={href}
            onClick={onClick}
            className={`flex items-center p-2 text-base font-normal rounded-lg ${
                isActive ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
            {children}
        </a>
    )

    const SidePanelContent = () => (
        <div className="flex flex-col h-full bg-white dark:bg-gray-800">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold">کفش پانیک</h2>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            href="#"
                            onClick={() => {
                                setActivePage('products')
                                if (isMobile) onClose()
                            }}
                            isActive={activePage === 'products'}
                        >
                            <Package className="h-5 w-5 ml-2" />
                            محصولات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="#"
                            onClick={() => {
                                setActivePage('orders')
                                if (isMobile) onClose()
                            }}
                            isActive={activePage === 'orders'}
                        >
                            <ShoppingBag className="h-5 w-5 ml-2" />
                            سفارشات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="#"
                            onClick={() => {
                                setActivePage('production')
                                if (isMobile) onClose()
                            }}
                            isActive={activePage === 'production'}
                        >
                            <BarChart className="h-5 w-5 ml-2" />
                            تولیدات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="#"
                            onClick={() => {
                                setActivePage('inventory')
                                if (isMobile) onClose()
                            }}
                            isActive={activePage === 'inventory'}
                        >
                            <Package className="h-5 w-5 ml-2" />
                            موجودی
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="#"
                            onClick={() => {
                                setActivePage('sales')
                                if (isMobile) onClose()
                            }}
                            isActive={activePage === 'sales'}
                        >
                            <BarChart className="h-5 w-5 ml-2" />
                            فروش
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                    <SidePanelContent />
                </SheetContent>
            </Sheet>
        )
    }

    return isOpen ? <SidePanelContent /> : null
}