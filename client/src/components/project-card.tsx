import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { SelectProject } from "@db/schema";

export default function ProjectCard({ project }: { project: SelectProject }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="mb-4 aspect-video w-full rounded-lg object-cover"
        />
        <p className="mb-4 text-muted-foreground">{project.summary}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>
                <div
                  className="prose prose-sm mt-4 max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
