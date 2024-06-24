import Headlines from "../../components/Home_headline_Banner/Home_headline_Banner";
import CardsLogement from "../../components/Cards_logement/Cards_Logement";
import background from "../../assets/background_headlines.png";
import "./home_body.scss";

export default function Home() {
  return (
    <div className="main">
      <div className="body">
        <Headlines
          src={background}
          bannerText="Chez vous, partout et ailleurs"
          alt="Image d'une plage"
        />
        <CardsLogement />
      </div>
    </div>
  );
}
