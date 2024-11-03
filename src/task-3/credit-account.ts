import {BankNames, Currency, CreditAccountProps} from "./types";
import {BANK_NAMES, CURRENCIES} from "./constants";

export class CreditAccount {
    number: number;
    id: number;
    currency: Currency;
    balance: number;
    debt: number;
    refundBankName: BankNames;
    refundDate: Date;
    refundAmount: number;

    constructor({
                    number,
                    id,
                    currency,
                    balance,
                    debt,
                    refundBankName,
                    refundDate,
                    refundAmount
                }: CreditAccountProps
    ) {
        this.number = number;
        this.id = id;
        this.currency = currency;
        this.balance = balance;
        this.debt = debt ? -debt : 0;
        this.refundBankName = refundBankName;
        this.refundDate = refundDate;
        this.refundAmount = refundAmount;
    }

    /* Получаем сумму на счёте */
    getBalance(): string {
        return `Ваш баланс составляет: ${this.balance} ${this.currency}`;
    }

    /* Получаем сумму задолженности */
    getDebt(): string {
        return `Ваша задолженность составляет: ${this.debt} ${this.currency}`;
    }

    /* Получаем инфо о ближайшем платеже */
    getClosestRefundInfo(): string {
        const formattedDate: string = new Intl.DateTimeFormat("ru-RU").format(this.refundDate);
        const debtModule = Math.abs(this.debt);

        return `Ближайший платёж для "${this.refundBankName}" запланирован ${formattedDate}. Сумма списания: ${debtModule} ${this.currency}`;
    }

    /* Кладём деньги */
    addMoney(amount: number): string {
        /* Если есть задолженность, гасим сперва её, остальное кладём на баланс */
        if (this.debt < 0) {
            const residue: number = amount - Math.abs(this.debt);
            residue < 0 ? this.debt = this.debt + amount : this.balance = residue;

            return `Зачисление: +${amount} ${this.currency}. Ваша задолженность составляет 0. Баланс: ${this.balance} ${this.currency}`
        }

        return `Зачисление: +${amount} ${this.currency}. Ваша задолженность составляет ${this.debt} ${this.currency}`
    }

    /* Снимаем деньги */
    takeMoney(amount: number): string {
        /* Если есть задолженность и на балансе 0 */
        if (this.debt < 0 && this.balance <= 0) {
            /* Не даём снять деньги */
            return `Недостаточно средств. Ваша задолженность составляет ${this.debt} ${this.currency}. Ваш баланс составляет ${this.balance} ${this.currency}`
        }

        const residue: number = this.balance - amount;

        /* Если на балансе сумма больше, чем которую пытается снять юзер */
        if (residue > 0) {
            /* Уменьшаем баланс и выдём деньги */
            this.balance = this.balance - amount;

            return `Снятие наличных: -${amount} ${this.currency}. Ваш баланс составляет: ${this.balance} ${this.currency}`;
        }

        /* Если на балансе сумма меньше, чем которую пытается снять юзер */
        this.balance = 0;
        this.debt = this.debt - residue;

        /* Выдаём деньги и уведомляем юзера, что у него появилась задолженность */
        return `Снятие наличных: -${amount} ${this.currency}. Ваш баланс составляет: ${this.balance} ${this.currency}. Задолженность составляет: ${this.debt} ${this.currency}`;
    }
}

const date = new Date();
const creditAccount = new CreditAccount({number: 1234567890, id: 1, currency: CURRENCIES.RUR, balance: 0, debt: 222, refundBankName: BANK_NAMES.TBANK, refundDate: date, refundAmount: 222 })

console.log(creditAccount);
console.log(creditAccount.getBalance());
console.log(creditAccount.getDebt());
console.log(creditAccount.getClosestRefundInfo());
console.log(creditAccount.addMoney(333));
console.log(creditAccount.takeMoney(222));
