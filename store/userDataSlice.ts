import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// поля заполняемые пользователем на странице почти готово
import {
  TypeBaseDamage,
  TypeBodyDamage,
  TypeQuestionsStepOne,
  TypeQuestionsStepThree,
  TypeSalonDamage,
  TypeUserContacts,
} from '@store/types';

import {
  BaseDamageFields,
  BodyDamageFields,
  questionsStepOneFields,
  questionsStepThreeFields,
  SalonDamageFields,
  userContactsFields,
} from '@constants/fields';
import { TypePaymentType } from '@constants/fieldsValues';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    bodyDamage: {
      [BodyDamageFields.DAMAGE_GLASS]: true,
      [BodyDamageFields.DENTS]: false,
      [BodyDamageFields.CHIPS]: false,
      [BodyDamageFields.COLORATION]: false,
      [BodyDamageFields.RUST]: false,
      [BodyDamageFields.NO_DAMAGE]: false,
      [BodyDamageFields.BODY_DESCRIPTION]: '',
    },
    salonDamage: {
      [SalonDamageFields.SPOTS]: false,
      [SalonDamageFields.SEAT_DAMAGE]: false,
      [SalonDamageFields.SMELL]: false,
      [SalonDamageFields.MULTIMEDIA_DAMAGE]: false,
      [SalonDamageFields.DASHBOARD_DAMAGE]: false,
      [SalonDamageFields.NO_SALON_DAMAGE]: false,
      [SalonDamageFields.SALON_DESCRIPTION]: '',
    },
    baseDamage: {
      [BaseDamageFields.ENGINE_DAMAGE]: false,
      [BaseDamageFields.TRANSMISSION_DAMAGE]: false,
      [BaseDamageFields.BRAKE_SYSTEM_DAMAGE]: false,
      [BaseDamageFields.ELECTRONICS_DAMAGE]: false,
      [BaseDamageFields.STEERING_DAMAGE]: false,
      [BaseDamageFields.PENDANT_DAMAGE]: false,
      [BaseDamageFields.AIRBAG_DAMAGE]: false,
      [BaseDamageFields.NO_BASE_DAMAGE]: false,
      [BaseDamageFields.BASE_DESCRIPTION]: '',
    },

    questionsStepOne: {
      [questionsStepOneFields.MILEAGE]: null,
      [questionsStepOneFields.CITY]: '',
      [questionsStepOneFields.COLOR]: '',
      [questionsStepOneFields.WHEEL]: '',
      [questionsStepOneFields.CREDIT]: '',
    },
    questionsStepThree: {
      [questionsStepThreeFields.HAS_DTP]: '',
      [questionsStepThreeFields.DRIVEABLE]: '',
      [questionsStepThreeFields.REPAIR_COST]: null,
      [questionsStepThreeFields.ADDITIONAL_EQUIPMENT]: '',
      [questionsStepThreeFields.SMOKE]: '',
      [questionsStepThreeFields.KEY_COUNT]: '',
      [questionsStepThreeFields.USED_AS_TAXI]: '',
      [questionsStepThreeFields.JUMPS_IN_MILEAGE]: '',
      [questionsStepThreeFields.CAR_CONDITION]: '',
      [questionsStepThreeFields.MAIL]: '',
    },

    userContacts: {
      [userContactsFields.USER_NAME]: '',
      [userContactsFields.USER_PHONE]: null,
    },

    paymentType: '',
    meetingType: '',
  },

  reducers: {
    changeMeetingType(state, action: PayloadAction<TypePaymentType>) {
      state.meetingType = action.payload;
    },

    changePaymentType(state, action: PayloadAction<TypePaymentType>) {
      state.paymentType = action.payload;
    },

    resetAll(state) {
      Object.keys(state.bodyDamage).forEach((key) => {
        state.bodyDamage[key] = key === BodyDamageFields.BODY_DESCRIPTION ? '' : false;
      });

      Object.keys(state.salonDamage).forEach((key) => {
        state.salonDamage[key] = key === SalonDamageFields.SALON_DESCRIPTION ? '' : false;
      });

      Object.keys(state.baseDamage).forEach((key) => {
        state.baseDamage[key] = key === BaseDamageFields.BASE_DESCRIPTION ? '' : false;
      });

      Object.keys(state.questionsStepThree).forEach((key) => {
        state.questionsStepThree[key] = key === questionsStepThreeFields.REPAIR_COST ? null : '';
      });

      Object.keys(state.questionsStepOne).forEach((key) => {
        state.questionsStepOne[key] = key === questionsStepOneFields.MILEAGE ? null : '';
      });
    },

    updateHasDTP(state, action: PayloadAction<string>) {
      state.questionsStepThree[questionsStepThreeFields.HAS_DTP] = action.payload;

      if (action.payload === 'none') {
        state.questionsStepThree[questionsStepThreeFields.REPAIR_COST] = null;
        state.questionsStepThree[questionsStepThreeFields.DRIVEABLE] = '';
      }
    },

    changeUserContacts(state, action: PayloadAction<{ name: TypeUserContacts; value: string }>) {
      const { name, value } = action.payload;
      state.userContacts[name] = value;
    },

    updateQuestionsStepThree(state, action: PayloadAction<{ name: TypeQuestionsStepThree; value: string }>) {
      const { name, value } = action.payload;
      state.questionsStepThree[name] = value;
    },

    updateQuestionsStepOne(state, action: PayloadAction<{ name: TypeQuestionsStepOne; value: string }>) {
      const { name, value } = action.payload;
      state.questionsStepOne[name] = value;
    },

    updateBodyDamage(state, action: PayloadAction<{ name: TypeBodyDamage; value: boolean }>) {
      const { name, value } = action.payload;
      state.bodyDamage[name] = value;

      if (name === BodyDamageFields.NO_DAMAGE && value) {
        state.bodyDamage[BodyDamageFields.BODY_DESCRIPTION] = '';
      }
    },

    updateSalonDamage(state, action: PayloadAction<{ name: TypeSalonDamage; value: boolean }>) {
      const { name, value } = action.payload;
      state.salonDamage[name] = value;

      if (name === SalonDamageFields.NO_SALON_DAMAGE && value) {
        state.salonDamage[SalonDamageFields.SALON_DESCRIPTION] = '';
      }
    },

    updateBaseDamage(state, action: PayloadAction<{ name: TypeBaseDamage; value: boolean }>) {
      const { name, value } = action.payload;
      state.baseDamage[name] = value;

      if (name === BaseDamageFields.NO_BASE_DAMAGE && value) {
        state.baseDamage[BaseDamageFields.BASE_DESCRIPTION] = '';
      }
    },
  },
});

export default userDataSlice.reducer;
export const {
  updateBodyDamage,
  updateBaseDamage,
  updateSalonDamage,
  updateQuestionsStepThree,
  resetAll,
  updateHasDTP,
  updateQuestionsStepOne,
  changeUserContacts,
  changePaymentType,
  changeMeetingType,
} = userDataSlice.actions;
