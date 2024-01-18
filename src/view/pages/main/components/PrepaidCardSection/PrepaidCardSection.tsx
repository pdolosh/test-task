import React from "react";
import "./styles.scss";
import cardBackground from "../../../../assets/images/cartBack.svg";
import add from "../../../../assets/icons/add.svg"; 
import Title from "../../../../components/Title"; 

function PrepaidCardSection() {
  return (
    <div className="prepaid-card-container">
      <Title text="XEPPT Prepaid Card" /> 
      <div className="prepaid-card-section">
        <div
          className="prepaid-card"
          style={{ backgroundImage: `url(${cardBackground})` }}
        >
          <div className="status-tag">Inactive</div>
          <div className="balance-info">
            <p className="balance-number ">$0.00</p>
            <p className="balance-text">Available Balance</p>
          </div>
          <div className="card-number">4588 •••• •••• 0092</div>
        </div>
        <div className="new-card">
          <img className="add-icon" src={add} alt="Add Icon" />
          <p className='new-card-text'>Order a new card</p>
        </div>
      </div>
    </div>
  );
}

export default PrepaidCardSection;
