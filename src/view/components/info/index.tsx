import React from 'react';
import arrow from '../../assets/icons/arrow.svg';
import notification from '../../assets/icons/notifications.svg';
import { RoundInfo } from '../shared/round-info-block';
import './styles.scss';

interface Props {

}

export const Info: React.FC<Props> = ({ }) => {

  return (
    <div className='info'>
      <span className='info__initial'>FR</span>
      <RoundInfo>
        <img src={notification} alt='notification' />
      </RoundInfo>
      <RoundInfo>
        <p className='info__initial--name'>PM</p>
      </RoundInfo>
        <span className='profile'>PETER MORGAN</span>
        <img className='dropdown' src={arrow} alt='arrow' />
    </div>
  );
};
