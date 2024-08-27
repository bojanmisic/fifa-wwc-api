/**
 * Represents a positive number type.
 */
type PositiveNumber = number & { __positive__: true };

/**
 * Validates and creates a PositiveNumber for a given value.
 * 
 * @param value - The number to validate as positive.
 * @returns The validated positive number.
 * @throws Will throw an error if the value is not a positive number.
 */
function createPositiveNumber(value: number): PositiveNumber {
  if (value <= 0) {
    throw new Error("Value must be a positive number.");
  }
  return value as PositiveNumber;
}