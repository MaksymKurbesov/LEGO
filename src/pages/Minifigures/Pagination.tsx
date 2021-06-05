import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { PAGE_SIZE } from "../../utils/constructUrl";
import { range } from "../../utils/range";

interface PaginationItemProps {
  currentPage?: boolean;
}

interface PaginationProps {
  totalMinifigsCount: number;
  onPageChanged: any;
}

const PaginationStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PaginationItem = styled.li<PaginationItemProps>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.currentPage ? "black" : "lightgray")};
  border: 2px solid ${(props) => (props.currentPage ? "black" : "lightgray")};
  border-radius: 50%;
  font-size: 14px;
  font-weight: ${(props) => (props.currentPage ? "700" : "")};
  cursor: pointer;
`;

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const Pagination = ({ totalMinifigsCount, onPageChanged }: PaginationProps) => {
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [pageNeighbours, setPageNeighbours] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageState, setCurrentPageState] = useState(1);
  const isMobile = document.documentElement.clientWidth < 550;

  const createPageNumbers = () => {
    const totalPagesFn = totalPages;
    const currentPage = currentPageState;
    const pageNeighboursFn = pageNeighbours;

    const totalNumbers = pageNeighboursFn * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPagesFn > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighboursFn);
      const endPage = Math.min(
        totalPagesFn - 1,
        currentPage + pageNeighboursFn
      );
      let pages: Array<string | number> = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPagesFn - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPagesFn];
    }

    return range(1, totalPagesFn);
  };

  const gotoPage = (page: number) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));
    setCurrentPageState(currentPage);
    onPageChanged(currentPage);
  };

  const handleClick = (page: number | string) => () => {
    if (typeof page === "number") {
      gotoPage(page);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setPageNeighbours(0);
    }
  }, [isMobile]);

  useEffect(() => {
    setTotalRecords(totalMinifigsCount);
    setTotalPages(Math.ceil(totalRecords / PAGE_SIZE));
  }, [totalMinifigsCount, totalRecords]);

  return (
    <PaginationStyled>
      {createPageNumbers().map((page: number | string, i: number) => {
        if (page === LEFT_PAGE)
          return (
            <PaginationItem
              key={i}
              onClick={() =>
                gotoPage(currentPageState - pageNeighbours * 2 - 1)
              }
            >
              <span aria-hidden="true">&laquo;</span>
            </PaginationItem>
          );

        if (page === RIGHT_PAGE)
          return (
            <PaginationItem
              key={i}
              onClick={() =>
                gotoPage(currentPageState + pageNeighbours * 2 + 1)
              }
            >
              <span aria-hidden="true">&raquo;</span>
            </PaginationItem>
          );

        return (
          <PaginationItem
            currentPage={currentPageState === page}
            onClick={handleClick(page)}
            key={i}
          >
            {page}
          </PaginationItem>
        );
      })}
    </PaginationStyled>
  );
};

export default Pagination;
