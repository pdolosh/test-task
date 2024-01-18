import React from "react";
import "./styles.scss";
import Title from "../../../../components/Title";
import CardIcon from "../../../../assets/icons/credit_card.svg";
import walletIcon from "../../../../assets/icons/account_balance_wallet.svg";

function Transactions() {
  return (
    <div className="transactions">
      <Title text="Transactions" />
      <div className="transactions-header">
        <div className="tab-group">
          <button className="tab active">All</button>
          <button className="tab">XEPTT Card</button>
        </div>
        <button className="show-more">Show more</button>
      </div>
      <div className="transaction-list">
        <div className="transaction-item expense">
          <div className="details__wrapper">
            <div className="icon expense">
              <img src={CardIcon} alt="card_icon" />
            </div>
            <div className="details">
              <span className="merchant">Cineplex Inc.</span>
              <span className="date">Sept 24, Payment</span>
            </div>
          </div>
          <div className="amount">-$42.50</div>
        </div>
        <div className="transaction-item">
          <div className="details__wrapper">
            <div className="icon income">
              <img src={walletIcon} alt="card_icon" />
            </div>
            <div className="details">
              <span className="merchant">RBC Royal Bank</span>
              <span className="date">Aug 19, Transfer from bank</span>
            </div>
          </div>
          <div className="amount income">+$500.00</div>
        </div>
        <div className="transaction-item expense">
          <div className="details__wrapper">
            <div className="icon expense">
              <img src={CardIcon} alt="card_icon" />
            </div>
            <div className="details">
              <span className="merchant">Skyline Restaurant</span>
              <span className="date">Aug 1, Payment</span>
            </div>
          </div>
          <div className="amount">-$110.45</div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
