import { BaseDamageFields } from '@constants/fields';

export const fieldMap = {
  [BaseDamageFields.ENGINE_DAMAGE]: 'Двигатель',
  [BaseDamageFields.TRANSMISSION_DAMAGE]: 'Трансмиссия',
  [BaseDamageFields.BRAKE_SYSTEM_DAMAGE]: 'Тормозная система ',
  [BaseDamageFields.ELECTRONICS_DAMAGE]: 'Электроника',
  [BaseDamageFields.STEERING_DAMAGE]: 'Рулевое управление',
  [BaseDamageFields.PENDANT_DAMAGE]: 'Подвеска',
  [BaseDamageFields.AIRBAG_DAMAGE]: 'Airbag (Система безопасности)',
  [BaseDamageFields.NO_BASE_DAMAGE]: 'Повреждения отсутствуют',
};

export const descriptionTitle = 'Опишите подробнее характер повреждений, отмеченных выше.';
export const placeholder = 'Расскажите подробнее о повреждениях и укажите какие индикаторы,'
  + 'сигнализирующие о повреждениях автомобиля, горят на панели приборов';
