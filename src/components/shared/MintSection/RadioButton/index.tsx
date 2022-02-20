import { VFC } from 'react';

import s from './index.module.scss';

interface IProps {
  name: string;
  id: string;
  value: string | number;
  onSelect: () => void;
  checked?: boolean;
}

const RadioButton: VFC<IProps> = ({ name, id, value, checked, onSelect }) => {
  return (
    <>
      <input
        onChange={onSelect}
        className={s.inputRadio}
        type="radio"
        name={name}
        id={`${id}-${name}`}
        value={value}
        checked={checked}
      />
      <label htmlFor={`${id}-${name}`} className={s.button}>
        {value}
      </label>
    </>
  );
};

export default RadioButton;
