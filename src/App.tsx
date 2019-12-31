import React from 'react';
import './App.scss';
import Gantt from './gantt';
import Switch from './components/Switch';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>('dark');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className="App">
      <header className={'App-header ' + theme}>
        <p className="App-title">Gantt</p>
        <div className="App-switch">
          <Switch switcher={switchTheme} />
        </div>
        <Gantt />
      </header>
    </div>
  );
};

export default App;
