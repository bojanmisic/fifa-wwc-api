/**
 * A branded type for country codes.
 * 
 * This type ensures that strings representing country codes have exactly 3 characters.
 */
export type CountryCode = string & { __length3__: true };

/**
 * Creates a validated `CountryCode` type.
 * 
 * This function takes a string, checks if it has exactly 3 characters, and returns it as a `CountryCode` branded type.
 * 
 * @param code - The string representing a country code to be validated.
 * @returns A validated `CountryCode` type.
 * @throws Will throw an error if the `code` does not have exactly 3 characters.
 * 
 * @example
 * const validCode = createCountryCode("USA"); // Valid
 * const invalidCode = createCountryCode("US"); // Throws an error
 */
export function createCountryCode(code: string): CountryCode {
  if (code.length !== 3) {
    throw new Error("Country code must have exactly 3 characters.");
  }
  return code as CountryCode;
}