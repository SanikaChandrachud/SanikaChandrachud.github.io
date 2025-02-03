import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project-card";
import { Loader2 } from "lucide-react";
import type { SelectProject } from "@db/schema";

export default function ProjectsPage() {
  const { data: projects, isLoading } = useQuery<SelectProject[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="mb-8 text-4xl font-bold text-blue-300">Engineering Projects</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}