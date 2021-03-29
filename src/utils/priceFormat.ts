/**
 * priceFormat takes a number and returns it formated
 * with the R$ prefix and two decimal places.
 * @example
 *      priceFormat(3.141592)
 *      // returns: "R$ 3.14"
 * @param price The price to ber formated.
 * @returns The formated price.
 */
const priceFormat = (price: number): string => "R$ " + price.toFixed(2);

export default priceFormat;
