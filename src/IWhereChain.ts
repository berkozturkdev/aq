import { WhereQueryBuilder } from "./WhereQueryBuilder";
export interface IWhereChain {
    and(): WhereQueryBuilder;
    select(): any[];
}
