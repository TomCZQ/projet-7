import dataLogement from "../../data/logements.json";
import Card from "../Cards/Card";

export default function CardsLogement() {
  return (
    <div className="cards-container">
      {dataLogement.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
