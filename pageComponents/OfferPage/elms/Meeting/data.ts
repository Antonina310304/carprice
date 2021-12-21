import BlockSelectSalon from '@pages/OfferPage/elms/BlockSelectSalon';

import { Appointment } from '@constants/fieldsValues';

import Remote from '../Remote';

export const MeetingList: Record<Appointment, any> = {
  [Appointment.REMOTE]: {
    title: 'Вызвать эвакуатор',
    content: Remote,
  },
  [Appointment.LOCATION]: {
    title: 'Приеду самостоятельно в ваш салон',
    content: BlockSelectSalon,
  },
};
