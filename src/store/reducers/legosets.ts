import { LegoSetsAction, LegoSetsState } from "../../types/LegoSets";
import { LegoSetsActionTypes } from "../../types/LegoSetsActionTypes";

const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  error: "",
};

export const legosets = (
  state: LegoSetsState = initialState,
  action: LegoSetsAction
) => {
  switch (action.type) {
    case LegoSetsActionTypes.FETCH_LEGOSETS_REQUEST:
      return { ...state, isLoading: true };
    case LegoSetsActionTypes.FETCH_LEGOSETS_SUCCESS:
      return {
        ...state,
        items: action.payload.results,
        count: action.payload.count,
        isLoading: false,
      };
    case LegoSetsActionTypes.FETCH_LEGOSETS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case LegoSetsActionTypes.ADD_LEGOSETS:
      return {
        ...state,
        items: [...state.items, ...action.payload.results],
        isLoading: false,
      };
    default:
      return state;
  }
};
