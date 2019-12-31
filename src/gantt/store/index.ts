import React from 'react';
import { GanttStore, GanttAction, initialStore, reducer } from './reducer';

export interface StoreWithAction {
  state: GanttStore;
  dispatch: React.Dispatch<GanttAction>;
}
const Store = React.createContext<StoreWithAction>({
  state: initialStore,
  dispatch: () => {},
});

const StoreProvider: React.FC<React.Props<{}>> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialStore);
  return (
    <Store.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };
