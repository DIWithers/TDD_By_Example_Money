import {Dollar, Money} from "../src/money";
import {Franc} from "../src/money";

describe("Money Example", () => {
    it("should test multiplication", () => {
        let five: Money = Money.dollar(5);
        expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
        expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();

    });

    it("should test equality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
        expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
        expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
    });

    it("should test franc multiplication", () => {
        let five: Money = Money.franc(5);
        expect(five.times(2).equals(Money.franc(10))).toBeTruthy();
        expect(five.times(3).equals(Money.franc(15))).toBeTruthy();
    });

    it("should test currency", () => {
        expect(Money.dollar(1).getCurrency()).toBe("USD");
        expect(Money.franc(1).getCurrency()).toBe("CHF");
    });

});