interface ThemesMap {
  [key: string]: number;
}

interface ReversedThemesMap {
  [key: string]: string;
}

const reverseProps = (obj: ThemesMap) => {
  const res: ReversedThemesMap = {};
  Object.keys(obj).forEach((key) => {
    res[obj[key]] = key;
  });
  return res;
};

export const getThemesList = () => {
  const themesList = [];
  for (let [key, value] of Object.entries(THEMES_MAP)) {
    const name = key.replace(/-/g, " ");
    themesList.push([
      name.replace(/\b[a-z]/g, (char) => char.toUpperCase()),
      value,
    ]);
  }
  return themesList;
};

export const THEMES_MAP: Record<string, number> = {
  architecture: 252,
  "brick-headz": 610,
  city: 52,
  classic: 621,
  creator: 22,
  "dc-super-heroes": 695,
  disney: 608,
  duplo: 504,
  friends: 494,
  "harry-potter": 246,
  "hidden-side": 676,
  ideas: 576,
  mario: 690,
  "jurassic-park": 602,
  "marvel-super-heroes": 696,
  minecraft: 577,
  minifigures: 535,
  "monkey-kid": 693,
  ninjago: 435,
  princess: 593,
  "speed-champions": 601,
  "star-wars": 158,
  technic: 1,
};

export const REVERSED_THEMES_MAP = reverseProps(THEMES_MAP);
