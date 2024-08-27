/**
 * A branded type for positive numbers.
 * 
 * This type ensures that the number is strictly greater than zero, representing a positive value.
 */
export type PositiveNumber = number & { __positive__: true };

/**
 * Validates and creates a `PositiveNumber` for a given value.
 * 
 * This function takes a number, checks if it is positive (greater than zero), and returns it as a `PositiveNumber` branded type.
 * 
 * @param value - The number to validate as positive.
 * @returns The validated `PositiveNumber`.
 * @throws Will throw an error if the `value` is not a positive number.
 * 
 * @example
 * const validPositive = createPositiveNumber(10); // Valid
 * const invalidPositive = createPositiveNumber(-5); // Throws an error
 */
export function createPositiveNumber(value: number): PositiveNumber {
  if (value <= 0) {
    throw new Error("Value must be a positive number.");
  }
  return value as PositiveNumber;
}