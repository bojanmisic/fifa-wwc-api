type CountryCode = string & { __length3__: true };

function createCountryCode(code: string): CountryCode {
  if (code.length !== 3) {
    throw new Error("Country code must have exactly 3 characters.");
  }
  return code as CountryCode;
}