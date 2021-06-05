import { randomInteger } from "../randomInteger";
import HarryPotterLogo from "../../assets/img/harry-potter-app.png";
import IncrediblesLogo from "../../assets/img/incredibles-app.png";
import NinjagoRoninLogo from "../../assets/img/ninjago-ronin-app.png";
import StarWarsLogo from "../../assets/img/star-wars-app.png";

export const LEGO_APPS_MOCK = [
  {
    title: "Lego® Harry Potter™: Collection",
    logo: HarryPotterLogo,
    rating: randomInteger(1, 5),
  },
  {
    title: "Lego®: The Incredibles",
    logo: IncrediblesLogo,
    rating: randomInteger(1, 5),
  },
  {
    title: "Lego® Ninjago: Shadow Of Ronin",
    logo: NinjagoRoninLogo,
    rating: randomInteger(1, 5),
  },
  {
    title: "Lego® Star Wars™: The Force Awakens",
    logo: StarWarsLogo,
    rating: randomInteger(1, 5),
  },
];
