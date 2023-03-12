import Homepage from "../pages/home/Homepage";
import CovidInfo from "../layout/CovidInfo";
import ProductItem from "../pages/home/ProductItem";
import Aboutpage from "../pages/about/Aboutpage";
import Shoppage from "../pages/shop/Shoppage";
import Donatepage from "../pages/donate/Donatepage";
import Contactpage from "../pages/contact/Contactpage";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/covidinfo",
    element: <CovidInfo />,
  },
  {
    path: "/productitem",
    element: <ProductItem />,
  },
  {
    path: "/aboutpage",
    element: <Aboutpage />,
  },
  {
    path: "/shoppage",
    element: <Shoppage />,
  },
  {
    path: "/donatepage",
    element: <Donatepage />,
  },
  {
    path: "/contactpage",
    element: <Contactpage />,
  },
];
