import React, {useCallback, useState} from 'react';
import {TabIndexType} from '../../types';
import DetailContext from './DetailContext';

type Props = React.FC<{
  children: React.ReactElement;
}>;

const DetailProvider: Props = ({children}) => {
  const [currentTab, setCurrentTab] = useState<TabIndexType | undefined>(
    undefined,
  );
  const [currentEvent, setCurrentEvent] = useState<number | undefined>(
    undefined,
  );

  const changeCurrentEvent = useCallback((event: number) => {
    setCurrentEvent(event);
  }, []);

  const changeCurrentTab = useCallback((tab: TabIndexType) => {
    setCurrentTab(tab);
  }, []);

  return (
    <DetailContext.Provider
      value={{
        currentTab,
        currentEvent,
        changeCurrentEvent,
        changeCurrentTab,
      }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailProvider;
