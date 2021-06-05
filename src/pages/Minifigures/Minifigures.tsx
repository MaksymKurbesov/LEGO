/* eslint-disable react-hooks/exhaustive-deps */

import React, { FC, useEffect, useMemo } from "react";
import { CenteredContainer } from "../../components/StyledUI/CenteredContainer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import List from "../../components/List";
import { useActions } from "../../hooks/useActions";
import SearchBar from "../../components/SearchBar";
import Pagination from "./Pagination";
import styled from "styled-components/macro";
import useDebounce from "../../hooks/useDebounce";
import { useQueriesAsState } from "../../hooks/useQueriesAsState";
import { MinifiguresState } from "../../types/Minifigures";
import { PageTitle } from "../../components/StyledUI/PageTitle";

const TotalMinifigs = styled.span`
  display: block;
  margin-bottom: 20px;
`;

const Minifigures: FC = () => {
  const { asyncFetchMinifigures } = useActions();
  const { items, count, isLoading } = useTypedSelector<MinifiguresState>(
    (state) => state.minifigures
  );
  const [queries, setQuery] = useQueriesAsState({
    page: 1,
    search: "",
  });
  const debouncedSearchQuery = useDebounce<string>(queries.search);

  const onPageChanged = (page: number) => {
    setQuery("page", page);
    window.scrollTo(150, 150);
  };

  useEffect(() => {
    asyncFetchMinifigures({
      page: queries.page,
      search: queries.search,
    });
  }, [debouncedSearchQuery, queries.page]);

  const memoizedSearchBar = useMemo(() => {
    return <SearchBar queries={queries} setQuery={setQuery} />;
  }, [queries.search]);

  return (
    <>
      <PageTitle>Minifigures</PageTitle>
      <CenteredContainer>
        {memoizedSearchBar}
        <TotalMinifigs>Total: {count} minifigures</TotalMinifigs>
        <List items={items} isLoading={isLoading} />
        <Pagination totalMinifigsCount={count} onPageChanged={onPageChanged} />
      </CenteredContainer>
    </>
  );
};

export default Minifigures;
