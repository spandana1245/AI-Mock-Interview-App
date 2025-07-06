import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import NavigationRoutes from "@/components/navigation-routes";
import { useAuth } from "@clerk/clerk-react";
const ToggleContainer = () => {
  const { userId } = useAuth();
  return (
    <Sheet>
    <SheetTrigger className="block md:hidden">
        <Menu/>
    </SheetTrigger>
    <SheetContent>
        <SheetHeader>
        <SheetTitle></SheetTitle>
        
        </SheetHeader>
        <nav className="gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile/>
                    {userId && (
                        <NavLink
                            to={"/generate"}
                            className={({ isActive }) =>
                                cn("text-base text-neutral-500", isActive && "text-neutral-900 font-semibold")
                            }
                            >
                            Take an Interview
                            </NavLink>
                    )}
        </nav>
    </SheetContent>
    </Sheet>
  )
}

export default ToggleContainer