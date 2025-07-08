import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import Container from "@/components/ui/container";
import LogoContainer from "@/components/logo-container";
import { NavLink } from "react-router-dom";
import ProfileContainer from "@/components/profile-container";
import ToggleContainer from "@/components/toggle-containner";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 border-b border-border bg-white/50 dark:bg-black/30 backdrop-blur-md shadow-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between w-full py-3">
          {/* Logo (left side) */}
          <LogoContainer />

          {/* Navigation + Auth/Profile on right */}
          <div className="ml-auto flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary transition",
                    isActive && "text-primary font-semibold"
                  )
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary transition",
                    isActive && "text-primary font-semibold"
                  )
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary transition",
                    isActive && "text-primary font-semibold"
                  )
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary transition",
                    isActive && "text-primary font-semibold"
                  )
                }
              >
                Contact
              </NavLink>

              {userId && (
                <NavLink
                  to="/generate"
                  className={({ isActive }) =>
                    cn(
                      "hover:text-primary transition",
                      isActive && "text-primary font-semibold"
                    )
                  }
                >
                  Take an Interview
                </NavLink>
              )}
            </nav>

            {/* Toggle & Profile */}
            <ToggleContainer />
            <ProfileContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
