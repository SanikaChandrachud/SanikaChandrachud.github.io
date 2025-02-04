import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import NavBar from "@/components/nav-bar";
import HomePage from "@/pages/home-page";
import ProjectsPage from "@/pages/projects-page";
import AboutPage from "@/pages/about-page";
import AdminPage from "@/pages/admin-page";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";
import ParallaxBackground from "@/components/parallax-background";

function Router() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/auth" component={AuthPage} />
        {/* Hidden admin route, only accessible by typing /admin */}
        <ProtectedRoute path="/admin" component={AdminPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ParallaxBackground />
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;