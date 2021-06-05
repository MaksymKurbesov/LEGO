import Disney from "../../assets/img/disney-backgroundTheme.jpg";
import Minecraft from "../../assets/img/minecraft-backgroundTheme.jpg";
import Marvel from "../../assets/img/marvel-backgroundTheme.jpg";
import HarryPotter from "../../assets/img/harrypotter-backgroundTheme.jpg";
import Ninjago from "../../assets/img/ninjago-backgroundTheme.jpg";
import Technic from "../../assets/img/technic-backgroundTheme.jpg";
import StarWars from "../../assets/img/starwars-backgroundTheme.jpg";

export const TRENDING_THEMES = [
  { name: "Disney", img: Disney, url: `themes/disney?page=1&theme=608` },
  {
    name: "Minecraft",
    img: Minecraft,
    url: `themes/minecraft?page=1&theme=577`,
  },
  {
    name: "Marvel Superheroes",
    img: Marvel,
    url: `themes/marvel-super-heroes?page=1&theme=696`,
  },
  {
    name: "Harry Potter",
    img: HarryPotter,
    url: `themes/harry-potter?page=1&theme=246`,
  },
  { name: "Ninjago", img: Ninjago, url: `themes/ninjago?page=1&theme=435` },
  { name: "Technic", img: Technic, url: `themes/technic?page=1&theme=1` },
  {
    name: "Star Wars",
    img: StarWars,
    url: `themes/star-wars?page=1&theme=158`,
  },
];
