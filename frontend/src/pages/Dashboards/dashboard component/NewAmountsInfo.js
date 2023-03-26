import React from "react";
import NewDate from "../../../components/Orders/NewDate";
import styles from "../../../components/Orders/Order.module.css";

const NewAmountsInfo = ({
  amount,
  makePayment,
  setPop,
  setNewAmountId,
  makeNewAmountReady,
}) => {
  return (
    <div className={styles.orderInfo}>
      <div>
        {" "}
        <NewDate date={amount.date} />
        <div style={{ marginTop: "0.5rem" }} className={styles.user}>
          <span>Supplier name: {amount.supplier?.name}</span>
          <span style={{ margin: "0.2rem 0" }}>
            Supplier email: {amount.supplier?.email}
          </span>
          <span>Supplier phone: {amount.supplier?.phone}</span>
        </div>
      </div>

      <div className={styles.status}>
        <span
          onClick={() => {
            if (makePayment && !amount.accountant_checking) {
              setPop("open");
            }
          }}
          className={
            makePayment && !amount.accountant_checking
              ? `${styles.accountant} ${styles.false}`
              : amount.accountant_checking
              ? `${styles.true}`
              : `${styles.false}`
          }
        >
          {amount.accountant_checking ? "Paid" : "Not Paid"}
        </span>
        <span
          onClick={() => {
            if (makeNewAmountReady && !amount.admin_checking) {
              setNewAmountId(amount.id);
              setPop("open");
            }
          }}
          className={
            makeNewAmountReady && !amount.admin_checking
              ? `${styles.accountant} ${styles.false}`
              : amount.admin_checking
              ? `${styles.true}`
              : `${styles.false}`
          }
        >
          {amount.admin_checking ? "Admin Checked" : "Admin Not Checked"}
        </span>
      </div>
    </div>
  );
};

export default NewAmountsInfo;
