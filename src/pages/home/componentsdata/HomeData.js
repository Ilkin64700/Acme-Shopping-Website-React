import CircleSvg from "../../../assets/svg/CircleSvg";
import RectangleSvg from "../../../assets/svg/RectangleSvg";
import TriangleSvg from "../../../assets/svg/TriangleSvg";
import WhiteTent from "../../../assets/images//WhiteTent.jpg";
import TinCoffeeTumbler from "../../../assets/images//TinCoffeeTumbler.jpg";
import BlueCanvasPack from "../../../assets/images//BlueCanvasPack.jpg";

export const SupportData = [
  {
    number: "01",
    title: "SHOP PRODUCTS",
    icon: <CircleSvg circlestyle={"circleimage"} />,
    description:
      "Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!",
  },
  {
    number: "02",
    title: "DONATE",
    icon: <TriangleSvg trianglestyle={"triangleimage"} />,
    description:
      "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
  },
  {
    number: "03",
    title: "BUY GIFT CARDS",
    icon: <RectangleSvg rectanglestyle={"rectangleimage"} />,
    description:
      "Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.",
  },
];

export const herosectionfirstdata = [
  {
    title: "Serving you since 1989.",
    description:
      "Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.",
    buttontext: "Shop Merch",
  },
];
export const herosectionseconddata = [
  {
    title: "How we're keeping you safe during COVID-19",
    description:
      "As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.",
    buttontext: "Read Our Statement",
  },
];

export const herosectionthirddata = [
  {
    title: "Your Adventure Awaits",
    description:
      "Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.",
    buttontext: "Shop Merch",
  },
];

export const productdata = [
  {
    id: 1,
    bannertext: "White Tent",
    backgroundimagepath: WhiteTent,
    productclasses: ["product-imagefirst"],
    title: "White Tent",
    price: 200.0,
    showText: true,
  },
  {
    id: 2,
    bannertext: "Tin Coffee Tumbler",
    backgroundimagepath: TinCoffeeTumbler,
    productclasses: ["product-imagefirst", "imagesecond"],
    title: "Tin Coffee Tumbler",
    price: 35.0,
    showText: true,
  },
  {
    id: 3,
    bannertext: "Blue Canvas Pack",
    backgroundimagepath: BlueCanvasPack,
    productclasses: ["product-imagefirst", "imagethird"],
    title: "Blue Canvas Pack",
    price: 95.0,
    discountPrice: "$ 145.00 USD",
    haveSale: true,
    showText: true,
  },
];

export const localfirstdata = [
  {
    title: "Shop Local",
    textone: `We know that during COVID-19, a lot of folks around the city and
    state are feeling uneasy about the future - we’re not sure what
    the future holds either.`,
    texttwo: `That said: we know that we love making sure you have the gear
    you need for your adventures, and we’re going to keep doing that
    - with our team - until the city tells us we can’t.`,
    textthree:
      "But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.",
    textfour: "-------",
    textfive: "Jane & John Doe",
    textsix: "Acme Outdoors",
  },
];

export const localseconddata = [
  {
    title: "Meet the Owners",
    textone:
      "John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.",
    texttwo:
      "While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.",
    textthree:
      "Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions. ",
    textfour:
      "While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!",
    textfive:
      "In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.",
    textsix:
      "To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.",
  },
];
