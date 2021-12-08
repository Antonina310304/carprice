export interface IRegion {
  id: number;
  name: string;
  region: string;
  phone: string;
  selected: boolean;
}

export interface IState {
  region: {
    regions: IRegion[];
    activeRegion: IRegion;
  };
}

export interface ICarData {
  vin: string;
  number: string;
  year: number;
  model: string;
  brand: string;
  mail: string;
  agreement: string;
}

export type KeyCarData = keyof ICarData;
