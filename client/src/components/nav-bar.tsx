import { Link, useLocation } from "wouter";

export default function NavBar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Sanika's Engineering Design Portfolio</span>
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
              About Me
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}