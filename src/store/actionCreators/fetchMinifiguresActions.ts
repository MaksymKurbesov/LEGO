import { MinifiguresActionTypes } from "../../types/MinifiguresActionTypes";

export const fetchMinifiguresRequestAction = () => ({
  type: MinifiguresActionTypes.FETCH_MINIFIG_REQUEST,
  payload: "",
});

export const fetchMinifiguresSuccessAction = (data: any) => ({
  type: MinifiguresActionTypes.FETCH_MINIFIG_SUCCESS,
  payload: data,
});

export const fetchMinifiguresErrorAction = (error: string) => ({
  type: MinifiguresActionTypes.FETCH_MINIFIG_ERROR,
  payload: error,
});
