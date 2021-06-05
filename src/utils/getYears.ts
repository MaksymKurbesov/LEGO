export const getYears = (size: number, startAt: number) => {
  return Array.from(Array(size), (d, i) => startAt - i);
};
