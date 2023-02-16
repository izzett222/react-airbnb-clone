import Card from "./Card";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

export default function Experiences() {
    const data = [
        {
            id: 1,
            tag: "Sold out",
            img: card1,
            rating: 5.0,
            ratingReviewer: "(6) . USA",
            info: "Life lessons with Katie Zaferes",
            amount: 136
        },
        {
            id: 2,
            tag: "ONLINE",
            img: card2,
            rating: 5.0,
            ratingReviewer: "(30) . USA",
            info: "Learn wedding photography",
            amount: 125
        },
        {
            id: 3,
            img: card3,
            rating: 4.8,
            ratingReviewer: "(30) . USA",
            info: "Group Mountain Biking",
            amount: 50
        }
    ]

  return (
    <section className="w-screen mt-12 overflow-hidden">
      <div className="w-full pl-9 overflow-auto flex gap-5">
      {
        data.map(el => {
            return <Card key={el.id} {...el} />
        })
      }
      </div>
    </section>
  );
}
