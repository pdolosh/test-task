
import React from 'react';
import logo from '../../assets/icons/logo.svg';
import menuIcon from '../../assets/icons/menu.svg';
import { BaseHeader } from '../base-header';
import { Info } from '../info';
import { TabsNavigation } from '../tabs-navigation';
import './styles.scss';

export const Header = () => {

  const tabs = React.useMemo(() => {
    const items = [
      {
        label: 'Home',
        route: '',
        selected: true
      },
      {
        label: 'XEPPT Card',
        route: '',
      },
      {
        label: 'Statements',
        route: '',
      },
    ];
    return items;
  }, []);

  return (
    <BaseHeader className='header'>
      <div className="mobile-content">
        <img src={menuIcon} alt='menu' />
      </div>
      <img src={logo} alt="logo" className='header__image' />
      <div className="desktop-content" >
        <TabsNavigation tabs={tabs} />
      </div>
      <Info />
    </BaseHeader>
  );
}
