import Template1Form from "@/components/templates/template1/Template1Form";
import Template2Form from "@/components/templates/template2/Template2Form";
// images
import t1 from "../../assets/images/templates/t1.png";
import t2 from "../../assets/images/templates/t2.png";
import t3 from "../../assets/images/templates/t3.png";
import t4 from "../../assets/images/templates/t4.png";
import TemplateView from "@/components/commons/TemplateView";
import TemplateSmall2 from "@/components/templates/template2/TemplateSmall2";
import TemplateSmall1 from "@/components/templates/template1/TemplateSmall1";
import TemplateSmall3 from "@/components/templates/template3/TemplateSmall3";
import Template3Form from "@/components/templates/template3/Template3Form";
import TemplateSmall4 from "@/components/templates/template4/TemplateSmall4";
import Template4Form from "@/components/templates/template4/Template4Form";

export const templates = [
  {
    _id: 1,
    name: "template 1",
    template: <TemplateView />,
    tmp_form: <Template1Form />,
    small_code: <TemplateSmall1 />,
    img: t1,
  },
  {
    _id: 2,
    name: "template 2",
    template: <TemplateView />,
    tmp_form: <Template2Form />,
    small_code: <TemplateSmall2 />,
    img: t2,
  },
  {
    _id: 3,
    name: "template 3",
    template: <TemplateView />,
    tmp_form: <Template3Form />,
    small_code: <TemplateSmall3 />,
    img: t3,
  },
  {
    _id: 4,
    name: "template 4",
    template: <TemplateView />,
    tmp_form: <Template4Form />,
    small_code: <TemplateSmall4 />,
    img: t4,
  },
];
