import Card1 from "@/components/digital-cards/Card1";
import DefaultCard from "@/components/digital-cards/DefaultCard";
import img1 from "../../assets/images/digital-cards/card1.png";
import img2 from "../../assets/images/digital-cards/card2.png";
import img3 from "../../assets/images/digital-cards/card3.png";
import Card2 from "@/components/digital-cards/Card2";

export const dcards = [
  { _id: 1, component: <DefaultCard />, thumbnail: img1 },
  { _id: 2, component: <Card1 />, thumbnail: img2 },
  { _id: 3, component: <Card2 />, thumbnail: img3 },
];
