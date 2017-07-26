import {Dollar} from "../src/money";

describe("Money Example", () => {
    it("should test multiplication", () => {
        let five: Dollar = new Dollar(5);
        let product: Dollar = five.times(2);
        expect(product.amount).toEqual(10);

        product = five.times(3);
        expect(product.amount).toEqual(15);

    });

    it("should test equality", () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    });

});