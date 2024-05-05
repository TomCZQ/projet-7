import Headlines from "../components/home/Home_headline_Banner";
import background from "../assets/background_headlines_2.png";
import Dropdown from "../components/Dropdown.js";
import "../style/a-propos.css";
import aboutDatas from "../data/about.json";

export default function APropos() {
  return (
    <div className="body">
      <Headlines src={background} bannerText="" alt="Image d'une montagne" />
      <div className="dropdown-container">
        {aboutDatas.map((categorie, index) => (
          <Dropdown
            key={index}
            dropdownName={categorie.title}
            description={categorie.content}
          />
        ))}
      </div>
    </div>
  );
}
