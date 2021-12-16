import { BodyDamageFields } from '@constants/fields';

export const fieldMap = {
  [BodyDamageFields.DAMAGE_GLASS]: 'Повреждения стекла',
  [BodyDamageFields.DENTS]: 'Вмятины или царапины',
  [BodyDamageFields.CHIPS]: 'Сколы',
  [BodyDamageFields.COLORATION]: 'Окрасы',
  [BodyDamageFields.RUST]: 'Ржавчина',
  [BodyDamageFields.NO_DAMAGE]: 'Повреждения отсутствуют',
};

export const descriptionTitle = 'Опишите подробнее характер повреждений, отмеченных выше.';
export const placeholder =
  'Расскажите подробнее о повреждениях и укажите какие индикаторы, сигнализирующие о повреждениях автомобиля, горят на панели приборов';
