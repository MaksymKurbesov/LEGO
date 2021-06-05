import { LegoSetsActionTypes } from "./LegoSetsActionTypes";

export interface LegoSetsState {
  items: any[];
  count: number;
  isLoading: boolean;
  error: string;
}

interface FetchLegoSetsRequestAction {
  type: LegoSetsActionTypes.FETCH_LEGOSETS_REQUEST;
}
interface FetchLegoSetsSuccessAction {
  type: LegoSetsActionTypes.FETCH_LEGOSETS_SUCCESS;
  payload: any;
}
interface FetchLegoSetsErrorAction {
  type: LegoSetsActionTypes.FETCH_LEGOSETS_ERROR;
  payload?: string;
}
interface AddLegoSets {
  type: LegoSetsActionTypes.ADD_LEGOSETS;
  payload: any;
}

export type LegoSetsAction =
  | FetchLegoSetsRequestAction
  | FetchLegoSetsSuccessAction
  | FetchLegoSetsErrorAction
  | AddLegoSets;
