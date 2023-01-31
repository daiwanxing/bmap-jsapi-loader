import { expect, test } from "vitest";
import BMapLoader from "../src/index";

const AK = "ao989kkieuinjkk123";

test("Called BMapLoader should return promsie", () => {
    expect(typeof window).not.toBe("undefined");

    const result = BMapLoader({
        v: "3.0",
        ak: AK,
    });

    expect(result).toBeInstanceOf(Promise);
});

test("accept valid params", () => {
    const validCase = [
        {
            v: "3.0",
            ak: AK,
        },
        {
            v: "1.0",
            ak: AK,
            type: "webgl",
        },
        {
            v: "3.0",
            ak: AK,
            library: [
                {
                    lib: "DrawingManager",
                    version: "1.5",
                },
            ],
        },
        {
            v: "1.0",
            ak: AK,
            type: "webgl",
            library: [
                {
                    lib: "DrawingManager",
                },
            ],
        },
    ];

    validCase.forEach((params) => {
        expect(() => {
            BMapLoader(params);
        }).not.toThrow();
    });

    const invalidCase = [
        {
            ak: AK,
        },
        {
            v: AK,
        },
        {
            type: "gl",
        },
        {
            v: "1.0",
            ak: AK,
            type: "gl",
        },
    ];

    invalidCase.forEach((invalid) => {
        const res = BMapLoader(invalid);
        expect(res).rejects.toBeDefined();
    });
});
