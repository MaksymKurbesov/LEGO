export interface HistoryProps {
  push: any;
}

export const historyPush = (
  history: HistoryProps,
  search: string,
  pathname: string = ""
) => {
  history.push({
    pathname,
    search,
  });
};
