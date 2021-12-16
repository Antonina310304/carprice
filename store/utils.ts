import FieldsNames from '@constants/fields';

export const transformDataForStorage = (serverData: any) => {
  const {
    brand,
    year,
    model,
    body,
    color,
    transmission,
    engine_type,
    engine_volume,
    engine_power,
    wheel,
    modification,
  } = serverData;

  return {
    [FieldsNames.BRAND]: brand,
    [FieldsNames.YEAR]: year,
    [FieldsNames.MODEL]: model,
    [FieldsNames.BODY]: body, //кузов
    [FieldsNames.COLOR]: color,
    [FieldsNames.TRANSMISSION]: transmission,
    [FieldsNames.ENGINE_TYPE]: engine_type,
    [FieldsNames.ENGINE_VOLUME]: engine_volume,
    [FieldsNames.ENGINE_POWER]: engine_power,
    [FieldsNames.WHEEL]: wheel, // тип руля
    [FieldsNames.MODIFICATION]: modification,
  };
};
