import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { REVERSED_THEMES_MAP } from "../utils/const/THEMES_MAP";

export const useQueriesAsState = (queries?: any): any => {
  const history = useHistory();
  const [state, setState] = useState(
    queries || queryString.parse(history.location.search)
  );

  useEffect(() => {
    Object.entries(state).forEach(([key, value]) => setActiveState(key, value));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setActiveState = (query: string, value: any) => {
    const pathname = history.location.pathname;
    const re = new RegExp(/\b\/[\S]+/);
    const isNotPageQuery = query !== "page";
    const isThemeQuery = query === "id";

    setState((prev: any) => ({ ...prev, [query]: value }));
    if (isNotPageQuery) {
      setState((prev: any) => ({ ...prev, page: 1 }));
    }

    history.push({
      pathname: pathname.replace(
        re,
        `/${REVERSED_THEMES_MAP[isThemeQuery ? value : state.id]}`
      ),
      search: queryString.stringify(
        { ...state, page: 1, [query]: value },
        {
          skipEmptyString: true,
          skipNull: true,
        }
      ),
    });
  };

  return [state, setActiveState];
};
