import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function NavBar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Engineering Portfolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link href="/" className={location === "/" ? "font-bold" : ""}>
              Home
            </Link>
            <Link
              href="/projects"
              className={location === "/projects" ? "font-bold" : ""}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={location === "/about" ? "font-bold" : ""}
            >
              About
            </Link>
            {user && (
              <Link href="/admin">
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            )}
            {user ? (
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
              >
                Logout
              </Button>
            ) : (
              <Link href="/auth">
                <Button variant="ghost">Login</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
}
