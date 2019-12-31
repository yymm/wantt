import { Reducer } from 'react';

type GanttStore = {

}

const initialStore = {

}

interface GanttAction {
  payload: IStore;
  error?: boolean;
}

const reducer: Reducer<GanttStore, GanttAction> = (state, action) => {
  return { ...action.payload };
};

export { GanttStore, GanttAction, initialStore, reducer };
