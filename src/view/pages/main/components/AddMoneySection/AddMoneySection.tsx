import React from "react";
import "./styles.scss";
import plusIcon from "../../../../assets/icons/add.svg";

function AddMoneySection() {
  return (
    <div className="add-money-container">
      <div className="add-btn__wrapper">
        <button className="add-btn">Add Money</button>
      </div>

      <div className="add-content">
        <p className="add-title">Bank Account and Cards</p>
        <div className="card-list">
          <div className="card">
            <p>Signature RBC visa ( ****3234)</p>
          </div>
          <div className="card">
            <p>TD Bank Debit ( ****0024)</p>
          </div>
        </div>
        <div className="add-card-button">
          <img src={plusIcon} alt="plus" />
          <u className="button__text">Link a card or bank</u>
        </div>
      </div>
    </div>
  );
}

export default AddMoneySection;
