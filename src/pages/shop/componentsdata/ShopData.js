import TinCoffeeTumbler from "../../../assets/images//TinCoffeeTumbler.jpg";
import BlueCanvasPack from "../../../assets/images//BlueCanvasPack.jpg";
import GiftCard from "../../../assets/images/GiftCard.jpg";
import GreenCanvasPack from "../../../assets/images/GreenCanvasPack.jpg";
import WhiteTent from "../../../assets/images/WhiteTent.jpg";

export const shoppingdata = [
  {
    bannertext: "Gift Card",
    backgroundimagepath: GiftCard,
    productclasses: ["product-imagefirst", "imagefourth"],
    title: "Gift Card",
    price: 25.00,
    category: "GiftCards",
    showText: "true",
  },

  {
    bannertext: "Tin Coffee Tumbler",
    backgroundimagepath: TinCoffeeTumbler,
    productclasses: ["product-imagefirst", "imagesecond"],
    title: "Tin Coffee Tumbler",
    price: 35.00,
    category: "Accessories",
    showText: "true",
  },
  {
    bannertext: "Blue Canvas Pack",
    backgroundimagepath: BlueCanvasPack,
    productclasses: ["product-imagefirst", "imagethird"],
    title: "Blue Canvas Pack",
    price: 95.00,
    discountPrice:"$ 145.00 USD",
    haveSale: true,
    category: "Packs",
    showText: "true",
  },
  {
    bannertext: "Green Canvas Pack",
    backgroundimagepath: GreenCanvasPack,
    productclasses: ["product-imagefirst", "imagefifth"],
    title: "Green Canvas Pack",
    price: 125.00,
    category: "Packs",
    showText: "true",
  },
  {
    bannertext: "White Tent",
    backgroundimagepath: WhiteTent,
    productclasses: ["product-imagefirst", "imagesixth"],
    title: "White Tent",
    price: 200.00,
    category: "Tents",
    showText: "true",
  },
];

export const categoryProperties = [
  {
    text: "Gift Cards",
    filter: "GiftCards",
  },
  {
    text: "Tent",
    filter: "Tents",
  },
  {
    text: "Accessories",
    filter: "Accessories",
  },
  {
    text: "Packs",
    filter: "Packs",
  },
];
