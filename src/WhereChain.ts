import { WhereQueryBuilder } from "./WhereQueryBuilder";
import { IWhereChain } from "./IWhereChain";
import { WhereChainOperator } from "./WhereChainOperator";

export class WhereChain implements IWhereChain {
    private chain: WhereChainOperator[];

    constructor(private caller: WhereQueryBuilder) {
        this.caller = caller;
        this.chain = new Array<WhereChainOperator>();
    }

    and(): WhereQueryBuilder {
        return this.caller;
    }

    select(): any[] {
        return this.caller.execute();
    }
}
