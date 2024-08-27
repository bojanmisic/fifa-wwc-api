/**
 * A branded type for latitude values.
 * 
 * This type ensures that the number representing latitude is within the valid range of -90 to 90.
 */
export type Latitude = number & { __brand: "latitude" };

/**
 * Creates a validated `Latitude` type.
 * 
 * This function takes a number, checks if it is within the valid latitude range (-90 to 90), and returns it as a `Latitude` branded type.
 * 
 * @param value - The number representing a latitude to be validated.
 * @returns A validated `Latitude` type.
 * @throws Will throw an error if the `value` is not within the range of -90 to 90.
 * 
 * @example
 * const validLatitude = createLatitude(45); // Valid
 * const invalidLatitude = createLatitude(100); // Throws an error
 */
export function createLatitude(value: number): Latitude {
  if (value < -90 || value > 90) {
    throw new Error(`Invalid latitude: ${value}. Must be between -90 and 90.`);
  }
  return value as Latitude;
}