# ISO-3166-1 Country Codes Module

[![JSR](https://jsr.io/badges/@wildboar/iso3166)](https://jsr.io/@wildboar/iso3166)

This is an ESM module for ISO-3166-1 country codes. This module does **NOT**
contain country names. As country names vary by language, this is an
internationalization concern. This module is intended to be lightweight and
simple. Per the Unix philosophy: "Make each program do one thing well."

This module exports three functions and one type:

```ts
/** ISO-3166-1 codes all having a common country. */
export type ISO3166Info = Readonly<{
    /** The ISO-3166-1 two-letter country code */
    c2: string;
    /** The ISO-3166-1 three-letter country code */
    c3: string;
    /** The ISO-3166-1 three-digit numeric country code */
    n: string;
}>;

/** Checks if a two-letter, three-letter, or numeric code is valid. */
function isValid(code: string): boolean;
/** Checks if two two-letter, three-letter, or numeric codes refer to the same country. */
function compare(code1: string, code2: string): boolean;
/** Look up all the codes for a given country, given only one of its codes. */
function lookup(code: string): ISO3166Info | undefined;
```

That's it.

This module was made without the use of any AI / LLM tools. All of the code of
this module was made by a real human.

This module has no dependencies and works on Node.js, Deno, Bun, web browsers,
and probably any other Javascript runtime.
