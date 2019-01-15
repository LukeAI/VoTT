import { generateKey } from "./crypto";

describe("Crypto", () => {
    it("generates a key", () => {
        const key = generateKey();
        expect(key).not.toBeNull();
    });

    it("generates a random key without collisions", () => {
        const iterationMap: any = {};

        for (let i = 0; i < 10000; i++) {
            const key = generateKey();
            if (iterationMap[key]) {
                fail("Not unique value generated");
            }
            iterationMap[key] = true;
        }
    });
});
