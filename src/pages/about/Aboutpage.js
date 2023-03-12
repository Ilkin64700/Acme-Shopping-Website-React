import React from "react";
import Hero from "../../common/Hero";
import { herosectionthirddata } from "../home/componentsdata/HomeData";
import Reason from "./components/Reason";
import Local from "../../pages/home/components/Local";
import { localseconddata } from "../home/componentsdata/HomeData";
import OwnerInfo from "./components/OwnerInfo";

const Aboutpage = () => {
  const herosectionfourthdata = [
    {
      title: "Need Help?",
      description:
        "Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need to adjust an order or delivery details, we're ready to help!",
      buttontext: "Contact Support",
    },
  ];

  return (
    <>
      <Hero
        herostat={herosectionthirddata}
        bgimage={"herothirdbgimage"}
        widthadjustment={"herofirstwidthadjustment"}
        bgcolor={"herofirstbgcolor"}
        path={'/shoppage'}
      />
      <Reason />
      <Local
        sctnheight={"localsecondsctnheight"}
        localdata={localseconddata}
        bgimage={"localsecondbgimage"}
        widthadjustment={"localsecondwidthadjustment"}
        textadjustment={"localsecondtextadjustment"}
      />
      <OwnerInfo />
      <Hero
        herostat={herosectionfourthdata}
        bgimage={"herofourthbgimage"}
        widthadjustment={"herofirstwidthadjustment"}
        bgcolor={"herofirstbgcolor"}
        path={'/contactpage'}
      />
    </>
  );
};

export default Aboutpage;
