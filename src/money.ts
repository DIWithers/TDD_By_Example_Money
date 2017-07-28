export  abstract class Money {
    protected amount: number;

    equals(money: Money): boolean {
        return this.amount === money.amount && this.constructor === money.constructor;
    }

    static dollar(amount: number): Money {
        return new Dollar(amount);
    }

    static franc(amount: number): Money {
        return new Franc(amount);
    }

    abstract times(multiplier: number): Money;

    abstract getCurrency(): string;

}

export class Dollar extends Money {
    private currency: string;

    constructor(amount: number) {
        this.amount = amount;
        this.currency = "USD";
    }

    times(multiplier: number): Money {
        return new Dollar(this.amount * multiplier);
    }

    getCurrency(): string {
        return this.currency;
    }
}

export class Franc extends Money {
    private currency: string;

    constructor(amount: number) {
        this.amount = amount;
        this.currency = "CHF";
    }

    times(multiplier: number): Money {
        return new Franc(this.amount * multiplier);
    }

    getCurrency(): string {
        return this.currency;
    }
}