import { Operator } from "./operator";
export class Query {
    constructor(
        private field: string,
        private operator: Operator,
        private value: any
    ) {}

    public getField(): string {
        return this.field;
    }

    public getOperator(): Operator {
        return this.operator;
    }

    public getValue(): any {
        return this.value;
    }
}
