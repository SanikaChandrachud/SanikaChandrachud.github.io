import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [showAdmin, setShowAdmin] = useState(false);

  // Add keyboard shortcut listener (Ctrl + Shift + L) to toggle admin visibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        setShowAdmin(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Sanika Chandrachud Portfolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link href="/" className={`text-sm sm:text-base ${location === "/" ? "font-bold" : ""}`}>
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-sm sm:text-base ${location === "/projects" ? "font-bold" : ""}`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`text-sm sm:text-base ${location === "/about" ? "font-bold" : ""}`}
            >
              About
            </Link>
            {user && showAdmin && (
              <Link href="/admin">
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            )}
            {user && showAdmin && (
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
              >
                Logout
              </Button>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
}