import React, { useEffect, useState } from "react";
import AccoundBalanceSection from "./components/AcountBalanceSection";
import PrepaidCardSection from "./components/PrepaidCardSection";
import Transactions from "./components/Transactions";
import AddMoneySection from "./components/AddMoneySection";
import "./styles.scss";

function Main() {
  const [isDesktop, setDesktop] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setDesktop(false)
    }
  }, [window.innerWidth])
  
  return (
    <main className="main-content">
      <div className="first__row">
        <AccoundBalanceSection />
        {isDesktop && <AddMoneySection />}
      </div>
      {/* <AccoundBalanceSection /> */}
      <PrepaidCardSection />
      <Transactions />
      {!isDesktop && <AddMoneySection />}
    </main>
  );
}

export default Main;
