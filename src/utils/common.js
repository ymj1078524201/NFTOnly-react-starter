/**
 *
 * @param {string} address
 */
export const showShortAddress = (address) => {
  if (!address) return "-";

  return `${address.slice(0, 6)}…${address.slice(-4)}`;
};

export const sleep = (t = 1000) =>
  new Promise((resolve) => setTimeout(resolve, t));

/**
 *
 * @param {string} address
 */
export const fillAddress = (address) =>
  address.startsWith("0x") ? address : `0x${address}`;
