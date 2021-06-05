import { PAGE_SIZE } from "./constructUrl";

export const createWordCase = (remainder: number) => {
  if (remainder > PAGE_SIZE) remainder = PAGE_SIZE;
  if (remainder === 1) return "1 товар";
  return remainder < 5 ? `${remainder} товара` : `${remainder} товаров`;
};
