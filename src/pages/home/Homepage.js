import Hero from "../../common/Hero";
import Support from "./components/Support";
import {
  herosectionfirstdata,
  herosectionseconddata,
} from "./componentsdata/HomeData";
import Product from "./components/Product";
import Local from "./components/Local";
import { localfirstdata } from "./componentsdata/HomeData";
 
const Homepage = () => {
  return (
    <>
      <Hero
        herostat={herosectionfirstdata}
        bgimage={"herofirstbgimage"}
        widthadjustment={"herofirstwidthadjustment"}
        bgcolor={"herofirstbgcolor"}
        path={'/shoppage'}
      />
      <Support />
      <Hero
        herostat={herosectionseconddata}
        bgimage={"herosecondbgimage"}
        alignment={"herosecondalignment"}
        widthadjustment={"herosecondwidthadjustment"}
        bgcolor={"herosecondbgcolor"}
        path={"/covidinfo"}
      />
      <Product
        allproductsdiv={"allproducts"}
        allproductscolor={"allproductscolor"}
      />
      <Local
        localdata={localfirstdata}
        sctnheight={"localfirstsctnheight"}
        bgimage={"localfirstbgimage"}
        widthadjustment={"localfirstwidthadjustment"}
        textadjustment={"localfirsttextadjustment"}
        mgbottom={"janejoe"}
        fntweight={"acmestrong"}
      />
    </>
  );
};

export default Homepage;
