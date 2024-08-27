/**
 * A branded type for longitude values.
 * 
 * This type ensures that the number representing longitude is within the valid range of -180 to 180.
 */
export type Longitude = number & { __brand: "longitude" };

/**
 * Creates a validated `Longitude` type.
 * 
 * This function takes a number, checks if it is within the valid longitude range (-180 to 180), and returns it as a `Longitude` branded type.
 * 
 * @param value - The number representing a longitude to be validated.
 * @returns A validated `Longitude` type.
 * @throws Will throw an error if the `value` is not within the range of -180 to 180.
 * 
 * @example
 * const validLongitude = createLongitude(100); // Valid
 * const invalidLongitude = createLongitude(200); // Throws an error
 */
export function createLongitude(value: number): Longitude {
  if (value < -180 || value > 180) {
    throw new Error(`Invalid longitude: ${value}. Must be between -180 and 180.`);
  }
  return value as Longitude;
}