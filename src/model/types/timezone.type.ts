import { z } from 'zod';

/**
 * A branded type for timezones.
 * 
 * This type is used to ensure that strings representing timezones are validated and adhere to the expected format.
 */
export type Timezone = string & { __brand: "timezone" };

/**
 * A regular expression pattern for validating timezones in the format "UTC" or "UTC±[hh]:[mm]".
 * 
 * - Matches "UTC" (no offset).
 * - Matches "UTC±[hh]:[mm]" where:
 *   - `hh` is between 00 and 14.
 *   - `mm` is between 00 and 59.
 * 
 * Examples of valid strings:
 * - "UTC"
 * - "UTC+00:00"
 * - "UTC-03:00"
 * - "UTC+13:00"
 */
const timezoneRegex = /^UTC([+-](0[0-9]|1[0-4]):([0-5][0-9]))?$/;

/**
 * A Zod schema for validating that a string matches the expected timezone format "UTC" or "UTC±[hh]:[mm]".
 * 
 * If the string does not match the pattern, the schema will throw a validation error.
 */
const TimezoneSchema = z.string().regex(timezoneRegex, "Invalid timezone format");

/**
 * Creates a validated `Timezone` type.
 * 
 * This function takes a string, validates it against the `TimezoneSchema`, and returns it as a `Timezone` branded type.
 * 
 * @param value - The string representing a timezone to be validated.
 * @returns A validated `Timezone` type.
 * @throws Will throw an error if the `value` does not match the expected timezone format.
 * 
 * @example
 * const validTimezone = createTimezone("UTC+00:00"); // Valid
 * const invalidTimezone = createTimezone("UTC+15:00"); // Throws an error
 */
export function createTimezone(value: string): Timezone {
  TimezoneSchema.parse(value);  // Validate the timezone string using Zod
  return value as Timezone;     // Return the string with a branded type
}