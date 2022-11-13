export const asyncSleep = async (ms: number) => {
  await new Promise((resolve) => setTimeout(() => resolve(true), ms));
};
