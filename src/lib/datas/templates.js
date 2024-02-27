import Template1Form from "@/components/templates/template1/Template1Form";
import Template2Form from "@/components/templates/template2/Template2Form";
// images
import t1 from "../../assets/images/templates/t1.png";
import t2 from "../../assets/images/templates/t2.png";
import t3 from "../../assets/images/templates/t3.png";
import t4 from "../../assets/images/templates/t4.png";
import TemplateView from "@/components/commons/TemplateView";
import Template3Form from "@/components/templates/template3/Template3Form";
import Template4Form from "@/components/templates/template4/Template4Form";

export const templates = [
  {
    _id: 1,
    name: "template 1",
    template: <TemplateView />,
    tmp_form: <Template1Form />,
    img: t1,
  },
  {
    _id: 2,
    name: "template 2",
    template: <TemplateView />,
    tmp_form: <Template2Form />,
    img: t2,
  },
  {
    _id: 3,
    name: "template 3",
    template: <TemplateView />,
    tmp_form: <Template3Form />,
    img: t3,
  },
  {
    _id: 4,
    name: "template 4",
    template: <TemplateView />,
    tmp_form: <Template4Form />,
    img: t4,
  },
];
