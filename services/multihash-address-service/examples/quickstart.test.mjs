import assert from "node:assert/strict";
import test from "node:test";
import { createHash } from "node:crypto";
import { createMultihash } from "@red-cup-engineering/multihash-address-service/create-multihash";

test("MULTIHASH-QUICKSTART", async () => {
  const result = await createMultihash(new TextEncoder().encode("abc"));
  assert.equal(result.multihash.algorithmCode, 0x12);
  assert.equal(result.multihash.digestBase64url, createHash("sha256").update("abc").digest("base64url"));
});
