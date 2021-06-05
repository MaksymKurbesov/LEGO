import React, { FC } from "react";
import NoImage from "../assets/img/NoImage.png";
import styled from "styled-components/macro";
import { DEVICE } from "../utils/const/DEVICE_SIZE";

interface ListProps {
  items: any[];
  isLoading: boolean;
}

const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: minmax(270px, max-content);
  gap: 20px;
  margin-bottom: 100px;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media ${DEVICE.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    grid-auto-rows: minmax(220px, max-content);
    gap: 10px;
    margin-bottom: 50px;
  }
`;

const Item = styled.li`
  padding: 10px;
  border: 2px solid #eee;
  transition: 0.2s all;
  &:hover {
    border: 2px solid black;
  }
  img {
    cursor: pointer;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .name {
    padding-bottom: 15px;
    font-size: 15px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p {
    font-size: 13px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

const List: FC<ListProps> = ({ items, isLoading }) => {
  if (isLoading && items.length === 0) return <>Loading...</>;

  return (
    <>
      <ListStyled>
        {items?.map((item: any) => {
          const { set_num, set_img_url, name, num_parts, year } = item;
          return (
            <Item key={set_num}>
              <img
                src={set_img_url || NoImage}
                alt="Legoset"
                width="180"
                height="180"
              />
              <ItemInfo>
                <p className="name">{name}</p>
                <p>{set_num}</p>
                <p>({num_parts} parts)</p>
                {year ? <p>{year}</p> : ""}
              </ItemInfo>
            </Item>
          );
        })}
      </ListStyled>
    </>
  );
};

export default List;
