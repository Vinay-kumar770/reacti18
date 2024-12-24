import React from 'react';
import './AccountDetails.css';
import AccountSummary from './AccountSummary.tsx';
import { useTranslation } from 'react-i18next';
// import "../../public/logo192.png"

const AccountDetails: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="account-details-container">
      <h2>{t("application.items.0.titles.accountDetailsTitle")}</h2>

      <AccountSummary
        accountSummaryTitle="Passing title Account Summary"   // if you're not sending this prop data, defalut value will reflect from en.json
        recentTransTitle="Recent Transactions"  // This value goes as prop drilling... flow: AccouintDetails --> AccountSummary --> RecentTransactions Component. If this value isn't passed, the default value set as Title for RecentTransaction
        description={t("application.items.0.descriptions.accountSummaryDescription")}
      />
    </div>
  );
};

export default AccountDetails;