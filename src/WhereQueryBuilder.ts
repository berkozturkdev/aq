import { Query } from "./Query";
import { Operator } from "./operator";
import { WhereChain } from "./WhereChain";
import { IWhereChain } from "./IWhereChain";
import { ConditionChecker } from "./ConditionChecker";

export class WhereQueryBuilder {
    private whereChain: WhereChain;
    private query: Query[];

    constructor(private array: any[]) {
        this.query = new Array<Query>();
        this.whereChain = new WhereChain(this);
    }

    private push(
        value: any,
        field: string = "",
        operator: Operator
    ): WhereChain {
        this.query.push(new Query(field, operator, value));
        this.whereChain = new WhereChain(this);
        return this.whereChain;
    }

    is(value: any, field?: string): IWhereChain {
        return this.push(value, field, Operator.EQ);
    }

    not(value: any, field?: string): IWhereChain {
        return this.push(value, field, Operator.NOT_EQ);
    }

    gt(value: any, field?: string): IWhereChain {
        return this.push(value, field, Operator.GT);
    }

    gtOrEq(value: any, field?: string): IWhereChain {
        return this.push(value, field, Operator.GT_OR_EQ);
    }

    lt(value: any, field?: string): IWhereChain {
        return this.push(value, field, Operator.LT);
    }

    ltOrEq(value: any, field?: string): IWhereChain {
        return this.push(value, field, Operator.LT_OR_EQ);
    }

    execute(): any[] {
        this.array = this.array.filter(item => {
            return this.query
                .map(q => ConditionChecker.check(q, item))
                .every(conditionResult => conditionResult === true);
        });

        return this.array;
    }
}
