import { TypeAppointment, TypePaymentType } from '@constants/fieldsValues';

export interface IActiveRegion {
  id: number;
  name: string;
  region: string;
  phone: string;
  selected: boolean;
}

export interface IBrands {
  code: string;
  popular: boolean;
  text: string;
  value: string;
}

export interface IYears {
  value: string;
  text: string;
}

export interface IModels {
  code: string;
  end: string;
  model_group_id: string;
  start: string;
  text: string;
  value: string;
}

export interface ICarBodyList {
  text: string;
  value: string;
}

export interface IRegion {
  regions: IActiveRegion[];
  activeRegion: IActiveRegion;
}

export interface IModifications {
  value: number;
  text: string;
}

export interface IView {
  almostDoneStep: string;
}

export interface ICatalogs {
  statusBrand: string;
  errorBrand: string;

  statusYears: string;
  errorYears: string;

  statusModel: string;
  errorModel: string;

  statusModifications: string;
  errorModifications: string;

  statusCarBodyList: string;
  errorCarBodyList: string;

  statusCities: string;
  errorCities: string;

  brands: IBrands[];
  cities: any[];
  years: IYears[];
  models: IModels[];
  modifications: IModifications[];
  carBodyList: ICarBodyList[];
  dateListMeeting: any[]
  timeListMeeting: any[]

  officeListMeeting: any[];
  statusOfficeListMeeting: string;
}

export interface ICarDetail {
  brandId: string;
  yearId: number;
  modelId: string;
  modificationId: string;
  bodyId: string;
}

export interface ICarData {
  vin: string;
  regNumber: string;

  agreement: boolean;
  carDetail: ICarDetail;
  statusRequest: string;
  errorRequest: string;
  errorDetect: string;
  wheel: string;
  statusDetect: string;
  credit: string;
}

export interface IBodyDamage {
  chips: boolean;
  coloration: boolean;
  damageGlass: boolean;
  dents: boolean;
  rust: boolean;
  noBodyDamage: boolean;
  bodyDescription: string;
}

export interface IBaseDamage {
  engineDamage: boolean;
  transmissionDamage: boolean;
  brakeSystemDamage: boolean;
  electronicsDamage: boolean;
  steeringDamage: boolean;
  pendantDamage: boolean;
  airbagDamage: boolean;
  noBaseDamage: boolean;
  baseDescription: string;
}

export interface IUserContacts {
  userName: string;
  userPhone: number;
}

export interface ISalonDamage {
  spots: boolean;
  seatDamage: boolean;
  smell: boolean;
  multimediaDamaged: boolean;
  dashboardDamaged: boolean;
  salonDescription: string;
  noSalonDamage: boolean;
  SalonDescription: string;
}

export interface IQuestionsStepOne {
  mileage: number;
  city: string;
  color: string;
  wheel: string; // руль
  credit: string;
}

export interface IQuestionsStepThree {
  hasDtp: string;
  mail: string;
  driveable: string;
  repairCost: number;
  additionalEquipment: ''; // нестандартное дооснащение?
  smoke: string;
  keyCount: string;
  usedAsTaxi: string;
  jumpsInMileage: string;
  carCondition: string;
}

interface IMeeting {
  officeId: string;
  date: string;
  time: string;
}

export interface IUserData {
  bodyDamage: IBodyDamage;
  baseDamage: IBaseDamage;
  salonDamage: ISalonDamage;
  mainQuestions: any;
  questionsStepOne: IQuestionsStepOne;
  questionsStepThree: IQuestionsStepThree;
  userContacts: IUserContacts;
  paymentType: TypePaymentType;
  meetingType: TypeAppointment;
  meeting: IMeeting;
}

export type TypeBodyDamage = keyof IBodyDamage;
export type TypeSalonDamage = keyof ISalonDamage;
export type TypeBaseDamage = keyof IBaseDamage;
export type TypeQuestionsStepOne = keyof IQuestionsStepOne;
export type TypeQuestionsStepThree = keyof IQuestionsStepThree;
export type TypeCarData = keyof ICarData;
export type TypeCarDetail = keyof ICarDetail;
export type TypeUserContacts = keyof IUserContacts;

export interface IState {
  carData: ICarData;
  catalogs: ICatalogs;
  region: IRegion;
  view: IView;
  userData: IUserData;
}
