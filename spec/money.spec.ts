import {Dollar} from "../src/money";
import {Franc} from "../src/money";

describe("Money Example", () => {
    it("should test multiplication", () => {
        let five: Dollar = new Dollar(5);
        expect(five.times(2)).toEqual(new Dollar(10));
        expect(five.times(3)).toEqual(new Dollar(15));

    });

    it("should test equality", () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
        expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
        expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
        expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
    });

    it("should test franc multiplication", () => {
        let five: Franc = new Franc(5);
        expect(five.times(2)).toEqual(new Franc(10));
        expect(five.times(3)).toEqual(new Franc(15));
    });

});