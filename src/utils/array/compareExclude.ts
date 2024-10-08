export const exclude = <T>(compareArray: T[], exclude: T | T[]) => {
  if (Array.isArray(exclude)) {
    return compareArray.filter((v) => !exclude.includes(v));
  }
  return compareArray.filter((v) => v !== exclude);
};

export const random = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};
