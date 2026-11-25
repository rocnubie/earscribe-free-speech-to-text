import assert from "node:assert/strict";
import test from "node:test";

import {
  README_SUFFIXES,
  auditReadmes,
  interfaceLocales,
  modelSizes,
  toolSlugs,
} from "./readme-audit.mjs";

test("reads model sizes from the source of truth", () => {
  const models = modelSizes();
  assert.deepEqual(
    models.map((model) => [model.id, model.wasm, model.webgpu]),
    [
      ["tiny", 41, 151],
      ["base", 77, 291],
      ["small", 249, 968],
      ["turbo", 1085, 3236],
    ],
  );
});

test("reads the published tool slugs and interface locales", () => {
  assert.equal(toolSlugs().length, 13);
  assert.equal(interfaceLocales().length, 27);
  assert.ok(!toolSlugs().includes("lecture-transcription"));
});

test("every README agrees with the code", () => {
  const { problems } = auditReadmes();
  assert.deepEqual(problems, []);
});

test("audits every shipped variant, RTL excluded on purpose", () => {
  assert.equal(README_SUFFIXES.length, 24);
  for (const rtl of [".fa", ".ar", ".ur"]) {
    assert.ok(!README_SUFFIXES.includes(rtl), `${rtl} is right-to-left and stays out`);
  }
});
