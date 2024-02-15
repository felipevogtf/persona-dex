// derived partly from https://github.com/aqiu384/aqiu384.github.io/blob/master/p5-tool/js/full_compendium.js

export interface Personas {
  [index: string]: PersonaData;
}

export interface PersonaData {
  name?: string; // only for when converted to list
  arcana: string;
  level: number;
  stats: number[];
  elems: string[];
  skills: {
    [index: string]: number;
  };
  personality?: string;
  special?: boolean;
  max?: boolean;
  dlc?: boolean;
  note?: string;
  rare?: boolean;

  // from new data for p5r
  inherits?: string;
  item?: string;
  itemr?: string;
  skillCard?: boolean; //determines if this persona's itemization results in a skill card
  trait?: string;

  // only for when converted to list
  strength?: number;
  magic?: number;
  endurance?: number;
  agility?: number;
  luck?: number;

  physical?: string;
  gun?: string;
  fire?: string;
  ice?: string;
  electric?: string;
  wind?: string;
  psychic?: string;
  nuclear?: string;
  bless?: string;
  curse?: string;

  // for sorting purpose
  physicalValue?: number;
  gunValue?: number;
  fireValue?: number;
  iceValue?: number;
  electricValue?: number;
  windValue?: number;
  psychicValue?: number;
  nuclearValue?: number;
  blessValue?: number;
  curseValue?: number;

  //mementos location data
  area?: string; //path name
  floor?: string; //path level
  img?: string;
}
