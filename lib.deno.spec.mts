import { test } from "node:test";
import { strict as assert } from "node:assert";
import { map, compare, isValid, lookup } from "./lib.mjs";

Deno.test("Ensure each country appears three times in the map", () => {
    const countries: Record<string, number> = {};
    for (const value of map.values()) {
        countries[value.c2] = (countries[value.c2] ?? 0) + 1;
    }
    for (const value of Object.values(countries)) {
        if (value != 3) {
            assert(false, "some country did not appear exactly three times in the map");
        }
    }
});

Deno.test("Matching case", () => {
    assert(compare("US", "US"));
    assert(compare("US", "USA"));
    assert(compare("USA", "840"));
});

Deno.test("Non-matching case", () => {
    assert(!compare("US", "SE"));
    assert(!compare("US", "SWE"));
    assert(!compare("USA", "752"));
});

Deno.test("Non-existent case", () => {
    assert(!lookup("XXX"));
});

Deno.test("Existent case", () => {
    assert(lookup("USA"));
});

Deno.test("Exact same code case", () => {
    assert(compare("USA", "USA"));
});

Deno.test("One non-existent case", () => {
    assert(!compare("USA", "XYZ"));
});

Deno.test("isValid", () => {
    assert(isValid("USA"));
    assert(!isValid("XYZ"));
});
