export class Money {
    protected amount: number;

    equals(money: Money): boolean {
        return this.amount === money.amount && this.constructor === money.constructor;
    }

}

export class Dollar extends Money {
    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }
}

export class Franc extends Money {
    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier);
    }
}