import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import type { SelectProject } from "@db/schema";
import ProjectCard from "@/components/project-card";
import ProjectJourneyMap from "@/components/project-journey-map";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Grid2X2 } from "lucide-react";

export default function ProjectsPage() {
  const { data: projects, isLoading } = useQuery<SelectProject[]>({
    queryKey: ["/api/projects"],
  });

  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300">Engineering Projects</h1>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="group"
            >
              <Grid2X2 className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Grid View
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              onClick={() => setViewMode('map')}
              className="group"
            >
              <MapPin className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Journey Map
            </Button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <ProjectJourneyMap projects={projects || []} />
        )}
      </div>
    </div>
  );
}