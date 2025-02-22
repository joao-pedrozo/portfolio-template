import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    imageUrl: string
    description: string
    details: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="rounded-lg w-full h-auto"
          />
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{project.details}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

