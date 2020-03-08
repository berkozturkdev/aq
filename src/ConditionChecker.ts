import { Query } from "./Query";
import { Operator } from "./operator";
import isObject from "is-object";

export class ConditionChecker {
    static check(query: Query, item: any): boolean {
        return isObject(item)
            ? ConditionChecker.checkObject(query, item)
            : ConditionChecker.checkPrimitive(query, item);
    }

    private static checkObject(query: Query, item: any): boolean {
        if (query.getOperator() === Operator.EQ) {
            return item[query.getField()] === query.getValue();
        }
        if (query.getOperator() === Operator.GT) {
            return item[query.getField()] > query.getValue();
        }
        if (query.getOperator() === Operator.GT_OR_EQ) {
            return item[query.getField()] >= query.getValue();
        }
        if (query.getOperator() === Operator.LT) {
            return item[query.getField()] < query.getValue();
        }
        if (query.getOperator() === Operator.LT_OR_EQ) {
            return item[query.getField()] <= query.getValue();
        }
        if (query.getOperator() === Operator.NOT_EQ) {
            return item[query.getField()] !== query.getValue();
        }
        throw new Error("Operator is not supported");
    }

    private static checkPrimitive(query: Query, item: any): boolean {
        if (query.getOperator() === Operator.EQ) {
            return item === query.getValue();
        }
        if (query.getOperator() === Operator.GT) {
            return item > query.getValue();
        }
        if (query.getOperator() === Operator.GT_OR_EQ) {
            return item >= query.getValue();
        }
        if (query.getOperator() === Operator.LT) {
            return item < query.getValue();
        }
        if (query.getOperator() === Operator.LT_OR_EQ) {
            return item <= query.getValue();
        }
        if (query.getOperator() === Operator.NOT_EQ) {
            return item !== query.getValue();
        }
        throw new Error("Operator is not supported");
    }
}
