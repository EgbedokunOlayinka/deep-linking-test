export type TabIndexType = 'DetailOne' | 'DetailTwo' | 'DetailThree';

export type AppStackType = {
  Home: undefined;
  Onboarding: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  Details: {tabIndex: TabIndexType; event: number};
  SwipeTest: undefined;
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
