export interface IRegion {
  id: number;
  name: string;
  region: string;
  phone: string;
  selected: boolean;
}

export interface IStore {
  region: {
    regions: IRegion[];
    activeRegion: IRegion;
  };
}
