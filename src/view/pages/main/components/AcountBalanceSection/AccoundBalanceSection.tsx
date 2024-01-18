import React from 'react'
import './styles.scss';
import canadianFlag from '../../../../assets/images/canadianFlag.png';
import Title from '../../../../components/Title';

function AccoundBalanceSection() {
  return (
    <div className="account-balance">
     <Title text='XEPPT Account Balance'/>
      <div className="balance-card">
        <div className="flag-container">
          <img src={canadianFlag} alt="Canadian Flag" /> 
        </div>
        <p className="balance-amount">$191.00</p>
      </div>
    </div>
  )
}

export default AccoundBalanceSection