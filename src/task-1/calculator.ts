export const Calculate = () => {
    /* Список доступных систем счисления */
    const NUMBER_SYSTEMS = {
        BINARY: "binary",
        DECIMAL: "decimal",
        HEXADECIMAL: "hexadecimal",
    } as const;

    /* Список знаков математических операций */
    const ARITHMETIC_SYMBOL = {
        ADDITION: "+",
        SUBTRACTION: "-",
        MULTIPLICATION: "*",
        DIVISION: "/",
    } as const;

    type NumberSystem = typeof NUMBER_SYSTEMS[keyof typeof NUMBER_SYSTEMS];
    type ArithmeticSymbol = typeof ARITHMETIC_SYMBOL[keyof typeof ARITHMETIC_SYMBOL];

    const calculate = (firstPart: string, secondPart: string, arithmeticSymbol: ArithmeticSymbol, numberSystem: NumberSystem): string => {
        let result: string = "";
        let radix: number;

        switch (numberSystem) {
            case NUMBER_SYSTEMS.BINARY: {
                radix = 2;

                break;
            }

            case NUMBER_SYSTEMS.HEXADECIMAL: {
                radix = 16;

                break;
            }

            case NUMBER_SYSTEMS.DECIMAL:
            default: {
                radix = 10;
            }
        }

        const formattedFirstPart: number = parseInt(firstPart, radix);
        const formattedSecondPart: number = parseInt(secondPart, radix);

        if (isNaN(formattedFirstPart) || isNaN(formattedSecondPart)) {
            result = "Invalid input!";

            return result;
        }

        switch (arithmeticSymbol) {
            case ARITHMETIC_SYMBOL.ADDITION: {
                result = (formattedFirstPart + formattedSecondPart).toString();

                break;
            }

            case ARITHMETIC_SYMBOL.SUBTRACTION: {
                result = (formattedFirstPart - formattedSecondPart).toString();

                break;
            }

            case ARITHMETIC_SYMBOL.MULTIPLICATION: {
                result = (formattedFirstPart * formattedSecondPart).toString();

                break;
            }

            case ARITHMETIC_SYMBOL.DIVISION: {
                result = (formattedFirstPart / formattedSecondPart).toString();

                break;
            }

            default: {
                radix = 10;
            }
        }

        return result;
    }

    console.log(calculate("3E8", "C8", "*", NUMBER_SYSTEMS.HEXADECIMAL)); // 200000
    console.log(calculate("3E8", "C8", "/", NUMBER_SYSTEMS.HEXADECIMAL)); // 5
    console.log(calculate("3E8", "C8", "+", NUMBER_SYSTEMS.HEXADECIMAL)); // 1200
    console.log(calculate("3E8", "C8", "-", NUMBER_SYSTEMS.HEXADECIMAL)); // 800

    console.log(calculate("1111101000", "11001000", "*", NUMBER_SYSTEMS.BINARY)); // 200000
    console.log(calculate("1111101000", "11001000", "/", NUMBER_SYSTEMS.BINARY)); // 5
    console.log(calculate("1111101000", "11001000", "+", NUMBER_SYSTEMS.BINARY)); // 1200
    console.log(calculate("1111101000", "11001000", "-", NUMBER_SYSTEMS.BINARY)); // 800

    console.log(calculate("1000", "200", "*", NUMBER_SYSTEMS.DECIMAL)); // 200000
    console.log(calculate("1000", "200", "/", NUMBER_SYSTEMS.DECIMAL)); // 5
    console.log(calculate("1000", "200", "+", NUMBER_SYSTEMS.DECIMAL)); // 1200
    console.log(calculate("1000", "200", "-", NUMBER_SYSTEMS.DECIMAL)); // 800
}

Calculate();
