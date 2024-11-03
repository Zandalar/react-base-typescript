export const Vehicle = () => {
    enum WHEELS {
        FORWARD_LEFT_WHEEL = "Переднее левое",
        FORWARD_RIGHT_WHEEL = "Переднее правое",
        BACK_LEFT_WHEEL = "Заднее левое",
        BACK_RIGHT_WHEEL = "Заднее правое",
    }

    type WheelInfo = {
        /* Признак готовности колеса */
        isReady: boolean;

        /* Текущее давление в колесе (атмосферы) */
        currentPressure: number;
    }

    type Wheels = {
        [key in WHEELS]: WheelInfo;
    }

    type Vehicle = {
        /* Кол-во топлива в баке (литры) */
        fuelCount: number,

        /* Объём топливного бака (литры) */
        maxFuelCount: number,

        /* Текущая скорость */
        currentSpeed: number,

        /* Признак наличия достаточного кол-ва масла в двигателе */
        isOilEnough: boolean,

        /* Стандартное давление в колёсах (атмосферы) */
        normalWheelPressure: number,

        /* Инфа о состоянии колёс */
        wheels: Wheels,
    }

    const vehicle: Vehicle = {
        fuelCount: 25,
        maxFuelCount: 100,
        currentSpeed: 0,
        normalWheelPressure: 2.3,
        isOilEnough: true,
        wheels: {
            [WHEELS.FORWARD_LEFT_WHEEL]: {
                isReady: false,
                currentPressure: 1.9,
            },
            [WHEELS.FORWARD_RIGHT_WHEEL]: {
                isReady: false,
                currentPressure: 2.3,
            },
            [WHEELS.BACK_LEFT_WHEEL]: {
                isReady: false,
                currentPressure: 2.1,
            },
            [WHEELS.BACK_RIGHT_WHEEL]: {
                isReady: false,
                currentPressure: 2.3,
            },
        },
    }

    /* Подкачка колёс */
    const pumpUpTire = (wheel: keyof Wheels) => {
        /* Смотрим текущее давление в колёсах */
        let currentPressure: number = vehicle.wheels[wheel]?.currentPressure;

        /* Если давление ниже нормы - каждую секунду докачиваем по 0.1 атмосфере в колесо */
        const timer: ReturnType<typeof window.setTimeout> = setInterval(() => {
            if (currentPressure < vehicle.normalWheelPressure) {
                currentPressure = parseFloat((currentPressure + 0.1).toFixed(1));
                vehicle.wheels[wheel].currentPressure = currentPressure;

                return console.log(`Накачиваем ${wheel}, текущее давление - ${currentPressure} атмосфер`);
            }

            /* Когда давление пришло в норму - убираем подкачку и колесо становится готовым */
            vehicle.wheels[wheel].isReady = true;
            checkAllWheelsReady();
            clearInterval(timer);
        }, 1000)
    }

    /* Проверка всех колёс на готовность */
    const checkAllWheelsReady = () => {
        /* Сюда будем складывать готовые колёса */
        const readyWheels = [];

        /* Обходим 4 колеса и проверяем готовность */
        for (let key in vehicle.wheels) {
            const formattedKey = key as keyof Wheels;
            const isReady = vehicle.wheels[formattedKey]?.isReady;

            /* Если готово - складываем колесо в массив */
            if (isReady) {
                readyWheels.push(formattedKey);
            }
        }

        /* Если готовы все 4 - говорим об этом водителю */
        if (readyWheels.length === 4) {
            console.log("Все колёса готовы!");
            console.log("Проверки пройдены - счастливого пути!");
        }
    }

    const startEngine = () => {
        startSpeedCheck();
    }

    const startSpeedCheck = () => {
        console.log("Проверяем скорость автомобиля...");

        setTimeout(() => {
            /* Если машина находится в движении, говорим об этом водителю */
            if (vehicle.currentSpeed > 0) {
                return console.log(`Текущая скорость: ${vehicle.currentSpeed}, остановите автомобиль и попробуйте снова!`);
            } else {
                /* Если машина не двигается, говорим об этом водителю и продолжаем проверки */
                console.log(`Автомобиль остановлен`);
                startEngineCheck();
            }
        }, 3000)
    }

    /* Проверка двигателя */
    const startEngineCheck = () => {
        console.log("Проверяем уровень масла...");

        setTimeout(() => {
            /* Если уровень масла не в порядке, говорим об этом водителю */
            if (!vehicle.isOilEnough) {
                return console.log("Необходимо залить масло!");
            } else {
                /* Если уровень масла в порядке, говорим об этом водителю и продолжаем проверки */
                console.log("Уровень масла в порядке!");
                startFuelCheck();
            }
        }, 3000)
    }

    /* Проверка топлива */
    const startFuelCheck = () => {
        console.log("Проверяем топливо...");

        setTimeout(() => {
            /* Минимальный процент топлива в баке */
            const minFuelPercentage: number = 15;
            /* Минимальное количество топлива в литрах относительно объёма бака */
            const minFuelValue: number = vehicle.maxFuelCount * (minFuelPercentage / 100);

            /* Если количество топлива меньше минимально допустимого - предупредим что необходимо залить топливо */
            if (vehicle.fuelCount < minFuelValue) {
                return console.log("Низкий уровень топлива! Заправьтесь!");
            }

            /* Если количество топлива выше минимально допустимого - покажем количество в литрах */
            console.log(`Уровень топлива в порядке! Текущее количество - ${vehicle.fuelCount} литров`);
            startWheelPressureCheck();
        }, 3000)
    }

    /* Проверка давления в колёсах */
    const startWheelPressureCheck = () => {
        console.log("Проверяем давление в колёсах...");

        setTimeout(() => {
            /* Обходим 4 колеса и проверяем давление */
            for (let key in vehicle.wheels) {
                const formattedKey = key as keyof Wheels;
                const value = vehicle.wheels[formattedKey]?.currentPressure;

                /* Если давление меньше нормы - подкачиваем колёса */
                if (value < vehicle.normalWheelPressure) {
                    pumpUpTire(formattedKey);
                } else {
                    /* Если давление в норме - переводим колесо в статус "готово" и проверяем готовность всех остальных */
                    vehicle.wheels[formattedKey].isReady = true;
                    checkAllWheelsReady();
                }
            }
        }, 3000)
    }

    startEngine();
}

Vehicle();
