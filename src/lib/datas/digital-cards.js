import Card1 from "@/components/digital-cards/Card1";
import DefaultCard from "@/components/digital-cards/DefaultCard";
import img1 from "../../assets/images/digital-cards/card1.png";
import img2 from "../../assets/images/digital-cards/card2.png";

export const dcards = [
  { _id: 1, component: <DefaultCard />, thumbnail: img1 },
  { _id: 2, component: <Card1 />, thumbnail: img2 },
];
