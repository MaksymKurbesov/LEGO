import { FetchOptions } from "../../types/fetchLegoSets";
import axios from "axios";
import { constructUrl } from "../../utils/constructUrl";
import {
  fetchMinifiguresErrorAction,
  fetchMinifiguresRequestAction,
  fetchMinifiguresSuccessAction,
} from "./fetchMinifiguresActions";

const AUTH = `key 1e39aff1fbf53322ee7c8fde844b9b90`;

export const asyncFetchMinifigures = ({ page, search }: FetchOptions) => {
  return async (dispatch: any) => {
    dispatch(fetchMinifiguresRequestAction());
    try {
      const url = constructUrl({ category: "minifigs", page, search });
      const { data } = await axios.get(url, {
        headers: {
          Authorization: AUTH,
        },
      });
      dispatch(fetchMinifiguresSuccessAction(data));
    } catch (e) {
      dispatch(fetchMinifiguresErrorAction("Что-то пошло не так"));
    }
  };
};
