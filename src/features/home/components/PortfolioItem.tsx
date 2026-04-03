import { type PortfolioItem } from "./Portfolio";

export default function PortfolioItem({
  title,
  description,
  imageUrl,
  projectUrl,
  tags,
}: PortfolioItem) {
  return (
    <>
      <div className="portfolio-item">
        <div>
          <div style={{ position: "relative" }}>
            <img src={imageUrl} alt={title} className="portfolio-image" />
            <div className="background-rectangle" />
          </div>
        </div>
        <div className="portfolio-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <a href={projectUrl} className="project-link">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
