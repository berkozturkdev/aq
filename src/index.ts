import { AQ } from "./aq";

declare global {
    interface Array<T> {
        $aq(): AQ<T>;
    }
}
(() => {
    Array.prototype.$aq = function() {
        return new AQ(this);
    };
})();
