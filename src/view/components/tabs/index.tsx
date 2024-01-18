import React from 'react';

import { clsx } from 'clsx';
import styles from './styles.scss';

export interface Tab {
  label: string;
  component: React.ComponentType<any>;
  disabled?: boolean;
}

interface Props<TTab> {
  items: TTab[];
  onChange?: (tab: TTab) => void;
  className?: string;
  classNamePrefix?: string;
  intermediateElement?: React.ReactElement | null;
  archived?: boolean;
}

export const Tabs = <TTab extends Tab>({
  items,
  className,
  onChange,
  classNamePrefix,
  intermediateElement,
}: Props<TTab>): React.ReactElement => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);

  const selectedTab = React.useMemo(() => items[selectedTabIndex], [items, selectedTabIndex]);

  const handleTabClick = React.useCallback(
    (index: number) => {
      setSelectedTabIndex(index);
      if (onChange) {
        onChange(items[index]);
      }
    },
    [items, onChange],
  );

  const SelectedTabComponent = selectedTab.component;

  return (
    <div className={className}>
      <ul className='tab-list'>
        {items.map((item, index) => (
          <TabItem
            key={`${index} ${item.label}`}
            item={item}
            index={index}
            onClick={handleTabClick}
            isSelected={item.label === selectedTab.label}
            isDisabled={item.disabled}
            classNamePrefix={classNamePrefix}
          />
        ))}
      </ul>
      {intermediateElement}
      <div>
        <SelectedTabComponent />
      </div>
    </div>
  );
};

interface TabItemProps<TTab> {
  item: TTab;
  onClick: (index: number) => void;
  index: number;
  isSelected: boolean;
  isDisabled?: boolean;
  classNamePrefix?: string;
}

const TabItem = <TTab extends Tab>({
  item,
  onClick,
  index,
  isSelected,
  isDisabled,
  classNamePrefix,
}: TabItemProps<TTab>): React.ReactElement => {
  const handleClick = React.useCallback(() => {
    if (!isDisabled) {
      onClick(index);
    }
  }, [index, isDisabled, onClick]);

  return (
    <li className={styles['tab-item']}>
      <button
        type="button"
        onClick={handleClick}
        className={clsx('tab-item__btn', {
          ['tab-item__btn--selected']: isSelected,
          ['tab-item__btn--disabled']: isDisabled,
          [`${classNamePrefix}__label`]: classNamePrefix,
        })}
      >
        {item.label}
      </button>
    </li>
  );
};
