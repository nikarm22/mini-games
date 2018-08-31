export const uniqueIdGenerator: () => number = (() => {
  let i: number = 1;
  return () => i++;
})();
