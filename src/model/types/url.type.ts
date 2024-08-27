export type Url = string & { __brand: "url" };

export function createUrl(value: string): Url {
  // You could add validation here if necessary to ensure it's a valid URL
  if (!isValidUrl(value)) {
    throw new Error(`Invalid URL: ${value}`);
  }
  return value as Url;
}

export function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}