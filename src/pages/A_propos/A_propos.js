import Headlines from "../../components/Home_headline_Banner/Home_headline_Banner.js";
import background from "../../assets/background_headlines_2.png";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import "./a-propos.scss";
import aboutDatas from "../../data/about.json";

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
