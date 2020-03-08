import "../src/index";
import { assert, expect } from "chai";
import { ConditionChecker } from "../src/ConditionChecker";
import { Query } from "../src/Query";
import { Operator } from "../src/operator";

describe("check", () => {
    it("should throw exception if operator is not supported primitive", () => {
        const query = new Query("", Operator.NOT_SUPPORTED, "5");
        assert.throws(
            () => ConditionChecker.check(query, null),
            Error,
            "Operator is not supported"
        );
    });

    it("should throw exception if operator is not supported object", () => {
        const query = new Query("test", Operator.NOT_SUPPORTED, { test: 5 });
        assert.throws(
            () => ConditionChecker.check(query, { test: 6 }),
            Error,
            "Operator is not supported"
        );
    });
});
