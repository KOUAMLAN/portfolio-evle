import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        p-3
        sm:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/70
          cursor-default
        "
        aria-label="Fermer la fenêtre"
      />

      {/* Modal */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          max-h-[95vh]
          overflow-y-auto
          overscroll-contain
          bg-white
          rounded-xl
          shadow-2xl
          p-4
          sm:p-8
        "
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            sm:top-4
            sm:right-4
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            bg-gray-100
            hover:bg-gray-200
            transition
            z-20
          "
          aria-label="Fermer"
        >
          <X size={22} />
        </button>

        <h2
          id="project-modal-title"
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-secondary
            mb-5
            pr-12
          "
        >
          {project.title}
        </h2>

        <div
          className="
            w-full
            aspect-video
            rounded-lg
            overflow-hidden
            bg-gray-100
            mb-6
          "
        >
          <iframe
            src={project.demoLink}
            title={`Démonstration ${project.title}`}
            className="
              w-full
              h-full
              border-0
            "
            loading="lazy"
            allowFullScreen
            allow="
              fullscreen;
              autoplay;
              clipboard-write;
            "
            referrerPolicy="no-referrer"
          />
        </div>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
          "
        >
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              min-h-[44px]
              px-5
              py-3
              bg-primary
              text-white
              rounded-lg
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Ouvrir la démo
            <ExternalLink size={18} />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="
              min-h-[44px]
              px-5
              py-3
              rounded-lg
              border
              border-gray-300
              font-semibold
              hover:bg-gray-100
              transition
            "
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemoModal;