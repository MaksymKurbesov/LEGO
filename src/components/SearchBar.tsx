import React, { FC } from "react";
import styled from "styled-components/macro";
import { getYears } from "../utils/getYears";
import { getThemesList } from "../utils/const/THEMES_MAP";
import { useRouteMatch } from "react-router-dom";
import { DEVICE } from "../utils/const/DEVICE_SIZE";

export interface IQueries {
  id?: any;
  year?: any;
  search: any;
}

export interface SearchBarProps {
  queries?: IQueries;
  setQuery?: any;
}

interface SearchFormProps {
  isMinifigPage: boolean | undefined;
}

const SearchForm = styled.form<SearchFormProps>`
  max-width: ${(props) => (props.isMinifigPage ? "520px" : "")};
  padding: 10px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.isMinifigPage ? "100%" : "45% 30% 25%"};
  background-color: #f8f8f8;
  input,
  select {
    padding: 10px;
  }
  input:first-child {
    width: 100%;
  }
  @media ${DEVICE.tablet} {
    padding: 6px;
    margin-bottom: 30px;
    input,
    select {
      padding: 6px;
    }
  }
  @media ${DEVICE.mobileL} {
    input,
    select {
      font-size: 13px;
    }
  }
`;

const SearchBar: FC<SearchBarProps> = ({ queries, setQuery }) => {
  const { search, id, year }: any = queries;
  const match = useRouteMatch();
  const isMinifigPage: boolean = match?.path === "/minifigures";

  return (
    <SearchForm isMinifigPage={isMinifigPage}>
      <input
        type="text"
        placeholder={
          isMinifigPage ? "Search for LEGO Minifigs" : "Search for LEGO Sets"
        }
        value={search}
        onChange={(e) => {
          setQuery("search", e.target.value);
        }}
      />
      {!isMinifigPage && (
        <>
          <select
            value={id}
            onChange={(e) => {
              setQuery("id", Number(e.target.value));
            }}
          >
            <option value="" disabled>
              Theme
            </option>
            {getThemesList().map(([name, value]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => {
              setQuery("year", e.target.value);
            }}
          >
            <option value="">Year</option>
            {getYears(70, 2021).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </>
      )}
    </SearchForm>
  );
};

export default SearchBar;
