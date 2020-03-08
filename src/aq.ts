import { WhereQueryBuilder } from "./WhereQueryBuilder";

export class AQ<T> {
    private array: T[];
    private whereQueryBuilder: WhereQueryBuilder;

    constructor(array: any[] = []) {
        this.array = array;
        this.whereQueryBuilder = new WhereQueryBuilder(this.array);
    }

    get(): T[] {
        return this.array;
    }

    where(): WhereQueryBuilder {
        return this.whereQueryBuilder;
    }
}
