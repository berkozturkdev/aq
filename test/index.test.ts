import "../src/index";
import { assert } from "chai";

describe("get", () => {
    it("should return empty when its an empty array", () => {
        const actual = [].$aq().get();

        [1, 2, 3].$aq();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return array itself", () => {
        const actual = [1].$aq().get();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 1);
        assert.equal(actual[0], 1);
    });
});

describe("is", () => {
    it("should return the values with is", () => {
        let actual = [1, 2, 3, 4, 5, 5]
            .$aq()
            .where()
            .is(5)
            .select();
        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 2);
        assert.equal(actual[0], 5);
        assert.equal(actual[1], 5);

        actual = [1, 2, 3, 4, 5, 5, 2, 2, 2];
        actual = actual
            .$aq()
            .where()
            .is(2)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 4);
        assert.equal(actual[0], 2);
        assert.equal(actual[1], 2);
        assert.equal(actual[2], 2);

        actual = [
            { type: "target", length: 2 },
            { type: "test", length: 3 },
            { type: "test", length: 4 }
        ];
        actual = actual
            .$aq()
            .where()
            .is(2, "length")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 1);
        assert.equal(actual[0].length, 2);
        assert.equal(actual[0].type, "target");
    });
});

describe("not", () => {
    it("should return empty when condition is not satisfied", () => {
        const actual = [1, 1, 1, 1]
            .$aq()
            .where()
            .not(1)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return value when condition is satisfied primitive", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .not(1)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 3);
        assert.equal(actual[0], 2);
    });

    it("should return value when condition is satisfied object", () => {
        const actual = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
            .$aq()
            .where()
            .not(1, "value")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 3);
        assert.equal(actual[0].value, 2);
    });
});

describe("gt", () => {
    it("should return empty when condition is not satisfied", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .gt(5)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return value when condition is satisfied", () => {
        let actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .gt(2)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 2);
        assert.equal(actual[0], 3);
        assert.equal(actual[1], 4);

        actual = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
            .$aq()
            .where()
            .gt(2, "value")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 2);
        assert.equal(actual[0].value, 3);
        assert.equal(actual[1].value, 4);
    });
});

describe("gtOrEq", () => {
    it("should return empty when condition is not satisfied", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .gtOrEq(5)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return value when condition is satisfied primitive", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .gtOrEq(2)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 3);
        assert.equal(actual[0], 2);
        assert.equal(actual[1], 3);
    });

    it("should return value when condition is satisfied object", () => {
        const actual = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
            .$aq()
            .where()
            .gtOrEq(2, "value")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 3);
        assert.equal(actual[0].value, 2);
        assert.equal(actual[1].value, 3);
    });
});

describe("lt", () => {
    it("should return empty when condition is not satisfied", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .lt(1)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return value when condition is satisfied primitive", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .lt(2)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 1);
        assert.equal(actual[0], 1);
    });

    it("should return value when condition is satisfied object", () => {
        const actual = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
            .$aq()
            .where()
            .lt(2, "value")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 1);
        assert.equal(actual[0].value, 1);
    });
});

describe("ltOrEq", () => {
    it("should return empty when condition is not satisfied", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .ltOrEq(0)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return value when condition is satisfied primitive", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .ltOrEq(1)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 1);
        assert.equal(actual[0], 1);
    });

    it("should return value when condition is satisfied object", () => {
        const actual = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
            .$aq()
            .where()
            .ltOrEq(1, "value")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 1);
        assert.equal(actual[0].value, 1);
    });
});

describe("ltandgtchain", () => {
    it("should return empty when condition is not satisfied", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .lt(3)
            .and()
            .gt(4)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 0);
    });

    it("should return result when condition is satisfied primitive", () => {
        const actual = [1, 2, 3, 4]
            .$aq()
            .where()
            .lt(4)
            .and()
            .gt(1)
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 2);
        assert.equal(actual[0], 2);
        assert.equal(actual[1], 3);
    });

    it("should return result when condition is satisfied object", () => {
        const actual = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
            .$aq()
            .where()
            .lt(4, "value")
            .and()
            .gt(1, "value")
            .select();

        assert.isNotNull(actual);
        assert.typeOf(actual, "array");
        assert.equal(actual.length, 2);
        assert.equal(actual[0].value, 2);
        assert.equal(actual[1].value, 3);
    });
});
