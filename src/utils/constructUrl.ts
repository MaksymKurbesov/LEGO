import { FetchOptions } from "../types/fetchLegoSets";

export const PAGE_SIZE = 20;

export const constructUrl = ({
  category,
  page,
  id,
  search,
  year,
}: FetchOptions) => {
  const baseUrl = `https://rebrickable.com/api/v3/lego`;
  let url = `${baseUrl}/${category}/?page=${page}&page_size=${PAGE_SIZE}&theme_id=${id}`;
  if (search) {
    url += `&search=${search}`;
  }
  if (year) {
    url += `&max_year=${year}&min_year=${year}`;
  }
  return url;
};
