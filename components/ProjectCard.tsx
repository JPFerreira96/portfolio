import Image from "next/image";

export type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  challenge: string;
  repository: string;
  liveUrl?: string;
  image: string;
  imageAlt: string;
};

export function ProjectCard({
  name,
  description,
  stack,
  challenge,
  repository,
  liveUrl,
  image,
  imageAlt
}: ProjectCardProps) {
  const preferredLink = liveUrl && liveUrl.trim().length > 0 ? liveUrl : repository;
  const linkLabel = liveUrl && liveUrl.trim().length > 0 ? "Ver site" : "Ver repositorio";

  return (
    <a
      className="project-card"
      href={preferredLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${name} - ${linkLabel}`}
    >
      <div className="project-image-wrap">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={675}
          className="project-image"
        />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="project-challenge">
        <strong>Desafio resolvido:</strong> {challenge}
      </p>
      <div className="project-stack" aria-label={`Stack do projeto ${name}`}>
        {stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <span className="project-link">{linkLabel}</span>
    </a>
  );
}
