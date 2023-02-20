import { expect, test } from "vitest";
import { loader } from "../src/index";
import type { LoaderOptions } from "../src";

function generateRandomString(length) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    const randomChars = Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * charactersLength))
    );
    return randomChars.join("");
}

const AK = generateRandomString(Math.floor(Math.random() * 11) + 10);

test("Called BMapLoader should return promsie", () => {
    expect(typeof window).not.toBe("undefined");

    const result = loader({
        v: "3.0",
        ak: AK,
    });

    expect(result).toBeInstanceOf(Promise);
});

test("accept valid params", () => {
    const validCase: LoaderOptions[] = [
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
            loader(params);
        }).not.toThrow();
    });

    const invalidCase = [
        {
            ak: AK,
            v: "",
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = loader(invalid);
        expect(res).rejects.toBeDefined();
    });
});
