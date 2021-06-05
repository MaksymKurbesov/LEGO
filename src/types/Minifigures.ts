import { MinifiguresActionTypes } from "./MinifiguresActionTypes";

export interface MinifiguresState {
  items: any[];
  count: number;
  isLoading: boolean;
  error: string;
}

interface FetchMinifiguresRequestAction {
  type: MinifiguresActionTypes.FETCH_MINIFIG_REQUEST;
}
interface FetchMinifiguresSuccessAction {
  type: MinifiguresActionTypes.FETCH_MINIFIG_SUCCESS;
  payload: any;
}
interface FetchMinifiguresErrorAction {
  type: MinifiguresActionTypes.FETCH_MINIFIG_ERROR;
  payload?: string;
}

export type MinifiguresAction =
  | FetchMinifiguresRequestAction
  | FetchMinifiguresSuccessAction
  | FetchMinifiguresErrorAction;
