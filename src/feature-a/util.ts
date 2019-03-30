export const computeAC = () => {
  const seed = Math.random() * 1e20;

  return Array.from('1234567890', v => parseInt(v, 10) + seed);
};

export const getTest = (arg: string, arg2: string) => `check-test-fixed#4-updated-${arg}--${arg2}`;

export const neededForFix = (x: number) => 1000 * x;
