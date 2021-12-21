import {
  IUserContacts,
  TypeBaseDamage,
  TypeBodyDamage,
  TypeCarData,
  TypeCarDetail,
  TypeQuestionsStepOne,
  TypeQuestionsStepThree,
  TypeSalonDamage,
  TypeUserContacts,
} from '@store/types';

export const questionsStepOneFields: Record<string, TypeQuestionsStepOne> = {
  WHEEL: 'wheel', // руль
  COLOR: 'color',
  CREDIT: 'credit',
  MILEAGE: 'mileage',
  CITY: 'city', // из справочника
};

export const BaseDamageFields: Record<string, TypeBaseDamage> = {
  ENGINE_DAMAGE: 'engineDamage',
  TRANSMISSION_DAMAGE: 'transmissionDamage',
  BRAKE_SYSTEM_DAMAGE: 'brakeSystemDamage',
  ELECTRONICS_DAMAGE: 'electronicsDamage',
  STEERING_DAMAGE: 'steeringDamage',
  PENDANT_DAMAGE: 'pendantDamage',
  AIRBAG_DAMAGE: 'airbagDamage',
  NO_BASE_DAMAGE: 'noBaseDamage',
  BASE_DESCRIPTION: 'baseDescription',
};
export const userContactsFields: Record<string, TypeUserContacts> = {
  USER_NAME: 'userName',
  USER_PHONE: 'userPhone',
};

export const SalonDamageFields: Record<string, TypeSalonDamage> = {
  SPOTS: 'spots',
  SEAT_DAMAGE: 'seatDamage',
  SMELL: 'smell',
  MULTIMEDIA_DAMAGE: 'multimediaDamaged',
  DASHBOARD_DAMAGE: 'dashboardDamaged',
  NO_SALON_DAMAGE: 'noSalonDamage',
  SALON_DESCRIPTION: 'salonDescription',
};
export const BodyDamageFields: Record<string, TypeBodyDamage> = {
  DAMAGE_GLASS: 'damageGlass',
  DENTS: 'dents',
  CHIPS: 'chips',
  COLORATION: 'coloration',
  RUST: 'rust',
  NO_DAMAGE: 'noBodyDamage',
  BODY_DESCRIPTION: 'bodyDescription',
};

export const questionsStepThreeFields: Record<string, TypeQuestionsStepThree> = {
  HAS_DTP: 'hasDtp', //ДТП
  DRIVEABLE: 'driveable',
  REPAIR_COST: 'repairCost',

  ADDITIONAL_EQUIPMENT: 'additionalEquipment', // нестандартное дооснащение?
  SMOKE: 'smoke',
  KEY_COUNT: 'keyCount',
  USED_AS_TAXI: 'usedAsTaxi',
  JUMPS_IN_MILEAGE: 'jumpsInMileage',
  CAR_CONDITION: 'carCondition',
  MAIL: 'mail',
};

export const carDetailFields: Record<string, TypeCarDetail> = {
  BRAND: 'brandId', // приходит с сервера
  YEAR: 'yearId', // приходит с сервера
  MODEL: 'modelId', // приходит с сервера
  MODIFICATION: 'modificationId',
  BODY: 'bodyId', // из справочника
};

const fields: Record<string, TypeCarData> = {
  VIN: 'vin',
  REG_NUMBER: 'regNumber',

  // TRANSMISSION: 'transmission', // из справочника
  //ENGINE_TYPE: 'engineType', //?
  // ENGINE_VOLUME: 'engineVolume', //?
  // ENGINE_POWER: 'enginePower', //?
  // ?
};

export default fields;
export type TypeFields = keyof typeof fields;
