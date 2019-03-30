export const computeAC = () => {
  const seed = Math.random() * 1e20;

  return Array.from('1234567890', v => parseInt(v, 10) + seed);
};

export const getTest = () => 'check-test';
