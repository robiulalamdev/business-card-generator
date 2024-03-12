import Template1Form from "@/components/templates/template1/Template1Form";
import Template2Form from "@/components/templates/template2/Template2Form";
import Template3Form from "@/components/templates/template3/Template3Form";
import Template4Form from "@/components/templates/template4/Template4Form";
import Template5Form from "@/components/templates/template5/Template5Form";
import Template6Form from "@/components/templates/template6/Template6Form";
import Template7Form from "@/components/templates/template7/Template7Form";
import Template8Form from "@/components/templates/template8/Template8Form";
import Template9Form from "@/components/templates/template9/Template9Form";
import Template10Form from "@/components/templates/template10/Template10Form";
// images
import t1 from "../../assets/images/templates/t1.png";
import t2 from "../../assets/images/templates/t2.png";
import t3 from "../../assets/images/templates/t3.png";
import t4 from "../../assets/images/templates/t4.png";
import t5 from "../../assets/images/templates/t5.png";
import t6 from "../../assets/images/templates/t6.png";
import t7 from "../../assets/images/templates/t7.png";
import t8 from "../../assets/images/templates/t8.png";
import t9 from "../../assets/images/templates/t9.png";
import t10 from "../../assets/images/templates/t10.png";
import TemplateView from "@/components/commons/TemplateView";
import JSXTemplate1 from "@/components/templates/template1/JSXTemplate1";
import JSXTemplate2 from "@/components/templates/template2/JSXTemplate2";
import JSXTemplate3 from "@/components/templates/template3/JSXTemplate3";
import JSXTemplate4 from "@/components/templates/template4/JSXTemplate4";
import JSXTemplate5 from "@/components/templates/template5/JSXTemplate5";
import JSXTemplate6 from "@/components/templates/template6/JSXTemplate6";
import JSXTemplate7 from "@/components/templates/template7/JSXTemplate7";
import JSXTemplate8 from "@/components/templates/template8/JSXTemplate8";
import JSXTemplate9 from "@/components/templates/template9/JSXTemplate9";
import JSXTemplate10 from "@/components/templates/template10/JSXTemplate10";

export const templates = [
  {
    _id: 1,
    name: "template 1",
    template: <JSXTemplate1 />,
    tmp_form: <Template1Form />,
    img: t1,
  },
  {
    _id: 2,
    name: "template 2",
    template: <JSXTemplate2 />,
    tmp_form: <Template2Form />,
    img: t2,
  },
  {
    _id: 3,
    name: "template 3",
    template: <JSXTemplate3 />,
    tmp_form: <Template3Form />,
    img: t3,
  },
  {
    _id: 4,
    name: "template 4",
    template: <JSXTemplate4 />,
    tmp_form: <Template4Form />,
    img: t4,
  },
  {
    _id: 5,
    name: "template 5",
    template: <JSXTemplate5 />,
    tmp_form: <Template5Form />,
    img: t5,
  },
  {
    _id: 6,
    name: "template 6",
    template: <JSXTemplate6 />,
    tmp_form: <Template6Form />,
    img: t6,
  },
  {
    _id: 7,
    name: "template 7",
    template: <JSXTemplate7 />,
    tmp_form: <Template7Form />,
    img: t7,
  },
  {
    _id: 8,
    name: "template 8",
    template: <JSXTemplate8 />,
    tmp_form: <Template8Form />,
    img: t8,
  },
  {
    _id: 9,
    name: "template 9",
    template: <JSXTemplate9 />,
    tmp_form: <Template9Form />,
    img: t9,
  },
  {
    _id: 10,
    name: "template 10",
    template: <JSXTemplate10 />,
    tmp_form: <Template10Form />,
    img: t10,
  },
];
