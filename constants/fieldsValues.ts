export enum PaymentType {
  NOW = 'NOW',
  DAYS = 'DAYS',
  MONTH = 'MONTH',
}

export enum Appointment {
  LOCATION = 'LOCATION',
  REMOTE = 'REMOTE',
}

export type TypePaymentType = keyof typeof PaymentType;
export type TypeAppointment = keyof typeof Appointment;
