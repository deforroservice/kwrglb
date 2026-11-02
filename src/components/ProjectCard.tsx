import type { Project } from '../data/site';
import { cardCover } from '../lib/art';
import { url } from '../lib/url';

// Shared by the static home page and the interactive projects list. Styles live in src/styles/cards.css.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a class="pcard" href={url(`projects/${project.slug}/`)}>
      {project.image ? (
        <span class="pcard-art">
          <img src={url(`projects/${project.image}-thumb.webp`)} alt="" loading="lazy" />
        </span>
      ) : (
        <span class="pcard-art" style={{ background: cardCover(project.seed) }} />
      )}
      <span class="pcard-body">
        <span class="chip" data-cat={project.category}>
          {project.category}
        </span>
        <span class="pcard-title">{project.name}</span>
        <span class="pcard-text">{project.summary}</span>
        <span class="pcard-arrow" aria-hidden="true">
          →
        </span>
      </span>
    </a>
  );
}
