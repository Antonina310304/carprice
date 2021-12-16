export const titles = {
  RTA: 'Был ли ваш автомобиль в ДТП?',
  DRIVEABLE: 'На ходу ли ваш автомобиль в данный момент?',
  ADDITIONAL_EQUIPMENT: 'Установлено ли на автомобиль нестандартное дооснащение?',
  SMOKE: 'Курили ли в салоне?',
  KEY_COUNT: 'Сколько у вас комплектов ключей?',
  USED_AS_TAXI: 'Использовался ли ваш автомобиль в такси?',
  JUMPS_IN_MILEAGE: 'Есть ли резкие скачки в отчетах по пробегу?',
  CAR_CONDITION: 'Как бы вы описали состояние своего автомобиля?',
  BASE_DAMAGE: 'Есть ли у вашего автомобиля повреждения из списка ниже?',
  SALON_DAMAGE: 'Повреждения салона',
  BODY_DAMAGE: 'Повреждения кузова',
  REPAIR_COST: 'Оцените стоимость необходимого ремонта',
};

export const rtAList = [
  {
    value: 'none',
    label: 'Нет',
  },
  {
    value: 'one',
    label: '1 ДТП',
  },
  {
    value: 'twoOrMore',
    label: '2+ ДТП',
  },
];

export const isDriveableList = [
  {
    value: 'yes',
    label: 'На ходу',
  },
  {
    value: 'no',
    label: 'Не на ходу',
  },
];

export const additionalEquipmentList = [
  {
    value: 'yes',
    label: 'Да, есть доработки',
  },
  {
    value: 'no',
    label: 'Нет, только заводское оборудование',
  },
];

export const smokeList = [
  {
    value: 'yes',
    label: 'Да',
  },
  {
    value: 'no',
    label: 'Нет',
  },
];

export const keyCountList = [
  {
    value: 'one',
    label: '1 ключ',
  },
  {
    value: 'more_one',
    label: '2+ ключа',
  },
];

export const usedAsTaxiList = [
  {
    value: 'yes',
    label: 'Да',
  },
  {
    value: 'no',
    label: 'Нет',
  },
];

export const jumpsInMileageList = [
  {
    value: 'yes',
    label: 'Да',
  },
  {
    value: 'no',
    label: 'Нет',
  },
  {
    value: 'unknown',
    label: 'Не знаю',
  },
];

export const carConditionList = [
  {
    value: 'good',
    label: 'Отличное',
  },
  {
    value: 'normal',
    label: 'Нормальное',
  },
  {
    value: 'bad',
    label: 'Плохое',
  },
];
