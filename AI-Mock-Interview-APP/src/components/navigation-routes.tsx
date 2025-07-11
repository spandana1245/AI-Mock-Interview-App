import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom"; // ✅ Make sure this is imported
import { MainRoutes } from "@/lib/helpers";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

const NavigationRoutes = ({ isMobile = false }: NavigationRoutesProps) => {
  return (
    <ul className={cn("flex items-center gap-6",isMobile && "items-start flex-col gap-6")}>
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) =>
            cn("text-base text-neutral-500", isActive && "text-neutral-900 font-semibold")
          }
        >
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavigationRoutes;
