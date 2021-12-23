import { SalonDamageFields } from '@constants/fields';

export const fieldMap = {
  [SalonDamageFields.SPOTS]: {
    title: 'Заметные пятна',
  },
  [SalonDamageFields.SEAT_DAMAGE]: {
    title: 'Растяжение или разрыв сиденья',
  },
  [SalonDamageFields.SMELL]: { title: 'Посторонний запах', subtitle: 'От курения, домашних животных, др.' },
  [SalonDamageFields.MULTIMEDIA_DAMAGE]: {
    title: 'Мультимедиа система повреждена',
    subtitle: 'Музыка, навигация, др.',
  },
  [SalonDamageFields.DASHBOARD_DAMAGE]: { title: 'Поврежденная приборная панель или внутренние панели' },
  [SalonDamageFields.NO_SALON_DAMAGE]: { title: 'Повреждения отсутствуют' },
};

export const descriptionTitle = 'Опишите подробнее характер повреждений, отмеченных выше.';
export const placeholder = 'Расскажите подробнее о повреждениях и укажите какие индикаторы,'
  + 'сигнализирующие о повреждениях автомобиля, горят на панели приборов';
