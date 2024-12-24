
import React from "react";
import "./RecentTransactions.css";
import { useTranslation } from "react-i18next";

interface RecentTransactionsProps {
  title: string;
  description: string;
  label: string;
  name: string;
  id: string;
  placeholder: string;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  recentTransTitle = "",  // getting this value from parent's parent compopnent
  description,
  label,
  name,
  id,
  placeholder = "", //basically every prop value should have default, either empty string or values comes from en.json
}) => {
  const {t} = useTranslation()
  return (
    <div>
      <section className="recent-transactions" id={id}>
        <h3 className="highlight-title">{recentTransTitle === "" ? t("application.items.0.titles.defaultTitle") : recentTransTitle}</h3>
        <p>{description}</p>
        <div className="field">
          <label htmlFor="accountNumber">{t("commonList.items.0.labels.accountNumberLabel")}</label>
          <div className="field-row">
            <span className="field-row text-center-use">1234567890</span>
          </div>
        </div>
        <div className="field">
          <label htmlFor={id}>{label}</label>
          <input type="text" name={name} id={id} placeholder={placeholder === "" ? t("application.items.0.placeholders.defaultPlaceholder") : placeholder} />
        </div>
      </section>

      <section className="account-options">
        <button onClick={() => alert("Transferring funds...")}>
          {t("application.items.0.buttons.transferFundButton")}
        </button>
        <button onClick={() => alert("Downloading statement...")}>
        {t("application.items.0.buttons.downloadStatementButton")}
        </button>
        <button onClick={() => alert("Updating account settings...")}>
        {t("application.items.0.buttons.updateAccountSettingButton")}
        </button>
      </section>
    </div>
  );
};

export default RecentTransactions;