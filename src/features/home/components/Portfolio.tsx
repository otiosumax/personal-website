import "../styles/Portfolio.css";
import portfolioJson from "../../../assets/portfolioItems.json" assert { type: "json" };
import PortfolioItem from "./PortfolioItem";

export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="wrapper">
      <h3 className="semi-transparent">Портфолио</h3>
      <h2>
        Избранные <span className="text-primary">работы</span>
      </h2>
      {portfolioJson.map((item, index) => (
        <PortfolioItem
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          projectUrl={item.projectUrl}
          tags={item.tags}
        />
      ))}
      <h1>
        Список продолжает <span className="text-primary">пополнятся</span>
      </h1>
    </div>
  );
}
