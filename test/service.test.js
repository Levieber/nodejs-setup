import { describe, it } from 'node:test';
import assert from "node:assert";
import "../src/types.js";
import { parseUser } from "../src/service.js";

describe("Service", () => {
  it("should parse user", () => {
    /**
     * @type {IncomingUser}
     */
    const user = {
      name: "John",
      email: "john@doe.com",
      password: "123456"
    };

    const parsedUser = parseUser(user);

    assert.deepStrictEqual(parsedUser, {
      name: user.name.toUpperCase(),
      email: user.email,
    });
    assert.deepStrictEqual(parsedUser.password, undefined);
  });
});