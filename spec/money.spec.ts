import {Dollar, Money} from "../src/money";
import {Franc} from "../src/money";

describe("Money Example", () => {
    it("should test multiplication", () => {
        let five: Money = Money.dollar(5);
        expect(five.times(2)).toEqual(Money.dollar(10));
        expect(five.times(3)).toEqual(Money.dollar(15));

    });

    it("should test equality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
        expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
        expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
        expect(new Franc(5).equals(Money.dollar(5))).toBeFalsy();
    });

    it("should test franc multiplication", () => {
        let five: Franc = new Franc(5);
        expect(five.times(2)).toEqual(new Franc(10));
        expect(five.times(3)).toEqual(new Franc(15));
    });

    it("should test currency", () => {
        expect(Money.dollar(1).getCurrency()).toBe("USD");
        expect(Money.franc(1).getCurrency()).toBe("CHF");
    })

});