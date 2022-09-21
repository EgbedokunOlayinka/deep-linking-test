import React, {useContext, useEffect} from 'react';
import {IDetailContext} from '../../types';

const DetailContext = React.createContext<IDetailContext>({
  currentEvent: undefined,
  currentTab: undefined,
  changeCurrentEvent: () => undefined,
  changeCurrentTab: () => undefined,
});

export function useDetail() {
  const context = useContext(DetailContext);

  useEffect(() => {
    if (!context) {
      console.warn(
        'useDetail needs DetailProvider as parent or ancestor component.',
      );
    }
  }, [context]);

  return context;
}

export default DetailContext;
