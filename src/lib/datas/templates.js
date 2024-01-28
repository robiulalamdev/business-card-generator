import TemplateCard1 from "@/components/templates/template1/Template1Card";
import Template1Form from "@/components/templates/template1/Template1Form";
import Template2Form from "@/components/templates/template2/Template2Form";
import Template2Card from "@/components/templates/template2/Template2Card";
// images
import img from "../../assets/images/card.png";
import t2 from "../../assets/images/templates/t2.png";

export const templates = [
  {
    _id: 1,
    name: "template-1",
    template: <TemplateCard1 />,
    tmp_form: <Template1Form />,
    img: img,
  },
  {
    _id: 2,
    name: "template-2",
    template: <Template2Card />,
    tmp_form: <Template2Form />,
    img: t2,
  },
  {
    _id: 3,
    name: "template-3",
    template: <TemplateCard1 />,
    tmp_form: <Template1Form />,
    img: img,
  },
  {
    _id: 4,
    name: "template-4",
    template: <TemplateCard1 />,
    tmp_form: <Template1Form />,
    img: img,
  },
  {
    _id: 5,
    name: "template-5",
    template: <TemplateCard1 />,
    tmp_form: <Template1Form />,
    img: img,
  },
  {
    _id: 6,
    name: "template-6",
    template: <TemplateCard1 />,
    tmp_form: <Template1Form />,
    img: img,
  },
];
