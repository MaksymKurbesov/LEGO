import { MinifiguresAction, MinifiguresState } from "../../types/Minifigures";
import { MinifiguresActionTypes } from "../../types/MinifiguresActionTypes";

const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  error: "",
};

export const minifigures = (
  state: MinifiguresState = initialState,
  action: MinifiguresAction
) => {
  switch (action.type) {
    case MinifiguresActionTypes.FETCH_MINIFIG_REQUEST:
      return { ...state, isLoading: true };
    case MinifiguresActionTypes.FETCH_MINIFIG_SUCCESS:
      return {
        ...state,
        items: action.payload.results,
        count: action.payload.count,
        isLoading: false,
      };
    case MinifiguresActionTypes.FETCH_MINIFIG_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
