/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useMemo } from "react";
import SearchBar from "../../components/SearchBar";
import AddMoreButton from "./AddMoreButton";
import { CenteredContainer } from "../../components/StyledUI/CenteredContainer";
import List from "../../components/List";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useDebounce from "../../hooks/useDebounce";
import { LegoSetsState } from "../../types/LegoSets";
import { useQueriesAsState } from "../../hooks/useQueriesAsState";
import { useParams } from "react-router-dom";
import { THEMES_MAP } from "../../utils/const/THEMES_MAP";
import styled from "styled-components";

const LegosetsCount = styled.span`
  display: block;
  margin-bottom: 30px;
`;

const Theme: FC = () => {
  const { asyncFetchLegoSets } = useActions();
  const { items, count, isLoading } = useTypedSelector<LegoSetsState>(
    (state) => state.legoSets
  );

  const { theme } = useParams<{ theme: string }>();
  const [queries, setQuery] = useQueriesAsState({
    page: 1,
    id: THEMES_MAP[theme],
    year: "",
    search: "",
  });
  const { page, id, year, search } = queries;
  const debouncedSearchQuery = useDebounce<string>(search);
  useEffect(() => {
    asyncFetchLegoSets(queries);
  }, [page, id, year, debouncedSearchQuery]);

  const MemoizedSearchBar = useMemo(() => {
    return <SearchBar queries={queries} setQuery={setQuery} />;
  }, [page, id, year, search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CenteredContainer>
      {MemoizedSearchBar}
      <LegosetsCount>Total: {count} legosets</LegosetsCount>
      <List items={items} isLoading={isLoading} />
      <AddMoreButton
        remainder={count - items.length}
        setQuery={setQuery}
        currentPage={page}
        isLoading={isLoading}
      />
    </CenteredContainer>
  );
};
export default Theme;
