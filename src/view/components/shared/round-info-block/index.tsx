import React, { ReactNode } from 'react';
import './styles.scss';

interface Props {
  children: ReactNode
}

export const RoundInfo: React.FC<Props> = ({ children }) => {

  return (
    <div className='container'>
      {children}
    </div>
  );
};
