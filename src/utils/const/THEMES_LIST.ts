import Architecture from "../../assets/img/architecture-theme.png";
import BrickHeadz from "../../assets/img/brick-headz-theme.png";
import City from "../../assets/img/city-theme.png";
import Classic from "../../assets/img/classic-theme.png";
import Creator from "../../assets/img/creator-theme.png";
import Creator2 from "../../assets/img/creator2-theme.png";
import DCSuperHeroes from "../../assets/img/dc-superheroes-theme.png";
import Disney from "../../assets/img/disney-theme.png";
import Duplo from "../../assets/img/duplo-theme.png";
import Friends from "../../assets/img/friends-theme.png";
import HarryPotter from "../../assets/img/harry-potter-theme.png";
import HiddenSide from "../../assets/img/hidden-side-theme.png";
import Ideas from "../../assets/img/ideas-theme.png";
import JurassicPark from "../../assets/img/jurassic-park-theme.png";
import Mario from "../../assets/img/mario-theme.png";
import MarvelSuperHeroes from "../../assets/img/marvel-superheroes-theme.png";
import Minecraft from "../../assets/img/minecraft-theme.png";
import Minifigures from "../../assets/img/minifigures-theme.png";
import MonkeyKid from "../../assets/img/monkey-kid-theme.png";
import Ninjago from "../../assets/img/ninjago-theme.png";
import Princess from "../../assets/img/princess-theme.png";
import SpeedChampions from "../../assets/img/speed-champions-theme.png";
import StarWars from "../../assets/img/starwars-theme.png";
import Technic from "../../assets/img/technic-theme.png";

interface IThemes {
  icon: any;
  link: string;
}

export const THEMES_LIST: Array<IThemes> = [
  { icon: Architecture, link: `architecture` },
  { icon: BrickHeadz, link: `brick-headz` },
  { icon: City, link: `city` },
  { icon: Classic, link: `classic` },
  { icon: Creator, link: `creator` },
  { icon: DCSuperHeroes, link: `dc-super-heroes` },
  { icon: Disney, link: `disney` },
  { icon: Duplo, link: `duplo` },
  { icon: Friends, link: `friends` },
  { icon: HarryPotter, link: `harry-potter` },
  { icon: HiddenSide, link: `hidden-side` },
  { icon: Ideas, link: `ideas` },
  { icon: Mario, link: `mario` },
  { icon: JurassicPark, link: `jurassic-park` },
  { icon: Creator2, link: `creator` },
  { icon: MarvelSuperHeroes, link: `marvel-super-heroes` },
  { icon: Minecraft, link: `minecraft` },
  { icon: Minifigures, link: `minifigures` },
  { icon: MonkeyKid, link: `monkey-kid` },
  { icon: Ninjago, link: `ninjago` },
  { icon: Princess, link: `princess` },
  { icon: SpeedChampions, link: `speed-champions` },
  { icon: StarWars, link: `star-wars` },
  { icon: Technic, link: `technic` },
];
