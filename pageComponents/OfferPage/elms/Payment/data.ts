import { PaymentType, TypePaymentType } from '@constants/fieldsValues';

export const PaymentList: Record<TypePaymentType, any> = {
  [PaymentType.NOW]: {
    title: 'Моментальный перевод на банковскую карту',
    subTitle: 'В этом случае комиссия перевода составит 3% (условно)',
  },
  [PaymentType.DAYS]: {
    title: 'Перевод на банковскую карту в течение 3 банковских дней',
    subTitle: 'В этом случае комиссия перевода составит 1% (условно)',
  },
  [PaymentType.MONTH]: {
    title: 'Перевод на банковскую карту в течение месяца',
    subTitle: 'Вы получите всю сумму целиком',
  },
};
