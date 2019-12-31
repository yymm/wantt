import React from 'react';
import Gantt from './views/Gantt';
import { StoreProvider } from './store';

const GanttMain: React.FC = () => {
  return (
    <StoreProvider>
      <div className="gantt">
        <Gantt width={1096} height={480} />
      </div>
    </StoreProvider>
  );
};

export default GanttMain;
