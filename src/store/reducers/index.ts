import { combineReducers } from "redux";
import { legosets } from "./legosets";
import { minifigures } from "./minifigures";

export const rootReducer = combineReducers({
  legoSets: legosets,
  minifigures: minifigures,
});
