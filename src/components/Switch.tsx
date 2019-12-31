import React from 'react';
import './Switch.scss';

type Props = {
  switcher: () => void;
};

const Switch: React.FC<Props> = (props: Props) => {
  return (
    <div className="switch">
      <label className="switch__label">
        <input
          type="checkbox"
          className="switch__input"
          onChange={props.switcher}
        />
        <span className="switch__content"></span>
        <span className="switch__circle"></span>
      </label>
    </div>
  );
};

export default Switch;
