import { asyncFetchLegoSets } from "./asyncFetchLegoSets";
import * as FetchStatusActions from "./fetchLegoSetsActions";
import { asyncFetchMinifigures } from "./asyncFetchMinifigures";

const actionCreators = {
  asyncFetchLegoSets,
  asyncFetchMinifigures,
  ...FetchStatusActions,
};

export default actionCreators;
