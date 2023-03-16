import React from "react";
import Settings from "../Profile/Settings";

const AccountantDashboard = () => {
  return (
    <main className="container">
      <h1>Welcome to Accountant Dashboard</h1>
      <div className="grid">
        <aside>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Paid</button>
            </li>
            <li>
              <button>Not Paid</button>
            </li>
            <Settings />
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default AccountantDashboard;
