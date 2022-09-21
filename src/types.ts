export type TabIndexType = 'DetailOne' | 'DetailTwo' | 'DetailThree';

export type AppStackType = {
  Home: undefined;
  Details: {tabIndex: TabIndexType; event: number};
};

export type AppTabType = {
  DetailOne: undefined;
  DetailTwo: undefined;
  DetailThree: undefined;
};

export interface IDetailContext {
  changeCurrentTab: (data: TabIndexType) => void;
  changeCurrentEvent: (data: number) => void;
  currentTab: TabIndexType | undefined;
  currentEvent: number | undefined;
}
