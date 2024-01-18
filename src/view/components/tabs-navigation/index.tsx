import clsx from 'clsx';
import React from 'react';
import './styles.scss';

interface TabItem {
  label: string;
  route: string;
  selected?: boolean;
}

interface Props {
  tabs: TabItem[];
}

export const TabsNavigation: React.FC<Props> = ({ tabs }) => {

  return (
    <nav className='tabs'>
      <ul className='tabs-list'>
        {tabs.map(tab =>
          <li key={tab.route} className={clsx('tab__link', {
            ['tab__link--selected']: tab.selected,
          })}>
            <p className='tab__link-text'>{tab.label}</p>
          </li>
        )}
      </ul>
    </nav>
  );
};
