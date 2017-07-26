import {Dollar} from "../src/money";

describe("Money Example", () => {
    it("should test multiplication", () => {
        let five: Dollar = new Dollar(5);
        expect(five.times(2)).toEqual(new Dollar(10));
        expect(five.times(3)).toEqual(new Dollar(15));

    });

    it("should test equality", () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    });

});