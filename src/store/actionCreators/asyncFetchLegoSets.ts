import { FetchOptions } from "../../types/fetchLegoSets";
import axios from "axios";
import { constructUrl } from "../../utils/constructUrl";
import {
  addLegoSetsAction,
  fetchLegoSetsErrorAction,
  fetchLegoSetsRequestAction,
  fetchLegoSetsSuccessAction,
} from "./fetchLegoSetsActions";

const AUTH = `key 1e39aff1fbf53322ee7c8fde844b9b90`;

export const asyncFetchLegoSets = ({
  page,
  id,
  search,
  year,
}: FetchOptions) => {
  return async (dispatch: any) => {
    dispatch(fetchLegoSetsRequestAction());
    try {
      const { data } = await axios.get(
        constructUrl({ category: "sets", page, id, search, year }),
        {
          headers: {
            Authorization: AUTH,
          },
        }
      );
      page === 1
        ? dispatch(fetchLegoSetsSuccessAction(data))
        : dispatch(addLegoSetsAction(data));
    } catch (e) {
      dispatch(fetchLegoSetsErrorAction("Что-то пошло не так"));
    }
  };
};
