import { useCallback, useState, VFC } from 'react';
import Button from '../Button';
import cn from 'classnames';

import RadioButton from './RadioButton';

import s from './index.module.scss';
import { useWcContext } from 'context';
import { notify } from 'utils';

const buttonsCongif = [
  { name: 'mint-amount', value: 1, id: '1' },
  { name: 'mint-amount', value: 3, id: '3' },
  { name: 'mint-amount', value: 7, id: '7' },
  { name: 'mint-amount', value: 15, id: '15' },
  { name: 'mint-amount', value: 25, id: '25' },
];

interface IProps {
  name: string;
  vertical?: boolean;
  className?: string;
}

const MintSection: VFC<IProps> = ({ name, vertical, className }) => {
  const [value, setValue] = useState(1);
  const { mint, isMinting } = useWcContext();

  const handleMint = useCallback(async () => {
    try {
      await mint(value);
    } catch (error) {
      console.log(error);
      notify('Something went wrong!');
    }
  }, [mint, value]);

  return (
    <div className={cn(s.mint, className)}>
      <div className={cn(s.inner, { [s.vertical]: !!vertical })}>
        <div className={s.buttons}>
          {buttonsCongif.map((button) => (
            <RadioButton
              key={`${button.id}`}
              checked={value === button.value}
              onSelect={() => setValue(button.value)}
              {...button}
              name={name}
            />
          ))}
        </div>
        <Button loading={isMinting} onClick={handleMint}>
          Mint now
        </Button>
      </div>
    </div>
  );
};

export default MintSection;
