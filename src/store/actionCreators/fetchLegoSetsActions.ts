import { LegoSetsActionTypes } from "../../types/LegoSetsActionTypes";

export const fetchLegoSetsRequestAction = () => ({
  type: LegoSetsActionTypes.FETCH_LEGOSETS_REQUEST,
  payload: "",
});

export const fetchLegoSetsSuccessAction = (data: any) => ({
  type: LegoSetsActionTypes.FETCH_LEGOSETS_SUCCESS,
  payload: data,
});

export const fetchLegoSetsErrorAction = (error: string) => ({
  type: LegoSetsActionTypes.FETCH_LEGOSETS_ERROR,
  payload: error,
});

export const addLegoSetsAction = (data: any) => ({
  type: LegoSetsActionTypes.ADD_LEGOSETS,
  payload: data,
});
