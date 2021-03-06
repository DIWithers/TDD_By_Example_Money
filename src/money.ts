export  abstract class Money {
    protected amount: number;
    protected currency: string;

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    equals(money: Money): boolean {
        return this.amount === money.amount && this.constructor === money.constructor;
    }

    static dollar(amount: number): Money {
        return new Dollar(amount, "USD");
    }

    static franc(amount: number): Money {
        return new Franc(amount, "CHF");
    }

    abstract times(multiplier: number): Money;

    getCurrency(): string {
        return this.currency;
    }

}

export class Dollar extends Money {

    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
        return Money.dollar(this.amount * multiplier);
    }
}

export class Franc extends Money {

    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
        return Money.franc(this.amount * multiplier);
    }
}