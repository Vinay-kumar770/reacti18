import React, { useState } from "react";
import InputField from "./InputField.tsx";
import "./AccountSummary.css";
import RecentTransactions from "./RecentTransactions.tsx";
import { useTranslation } from "react-i18next";

interface AccountSummaryProps {
  title: string;
  description: string;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({
  accountSummaryTitle = "", // if data sent from parent as prop, that value will reflect else default value from en.json will reflect
  recentTransTitle,
  description = "",
}) => {
  const { t } = useTranslation();
  const [showRecentTransactions, setShowRecentTransactions] = useState(false);
  const [isEditingAccountNumber, setIsEditingAccountNumber] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  const handleShowRecentTransactions = () => {
    setShowRecentTransactions(!showRecentTransactions);
  };

  const handleEditClick = (field: string) => {
    switch (field) {
      case "accountNumber":
        setIsEditingAccountNumber(true);
        break;
      case "name":
        setIsEditingName(true);
        break;
      case "email":
        setIsEditingEmail(true);
        break;
      case "phoneNumber":
        setIsEditingPhoneNumber(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section className="account-summary">
        <h3 className="highlight-title">
          {accountSummaryTitle === ""
            ? t("application.items.0.titles.accountSummaryTitle")
            : accountSummaryTitle}
        </h3>
        {/* {line 49: This is a condition when if title value is passed, it will reflect else default Value from en.json will reflect } */}
        <p>
          {description === ""
            ? t("application.items.0.descriptions.accountSummaryDescription")
            : description}
        </p>

        <div className="field">
          <label htmlFor="accountNumber">
            {t("commonList.items.0.labels.accountNumberLabel")}
          </label>
          {isEditingAccountNumber ? (
            <InputField
              type="text"
              name="accountNumber"
              id="accountNumber"
              placeholder={t(
                "application.items.0.placeholders.enterAccountNumberPlaceholder"
              )}
            />
          ) : (
            <div className="field-row">
              <span>1234567890</span>
              <button onClick={() => handleEditClick("accountNumber")}>
                {t("application.items.0.buttons.editButton")}
              </button>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="name">
            {t("commonList.items.0.labels.nameLabel")}
          </label>
          {isEditingName ? (
            <InputField
              type="text"
              name="name"
              id="name"
              placeholder={t(
                "application.items.0.placeholders.enterNamePlaceholder"
              )}
            />
          ) : (
            <div className="field-row">
              <span>John Doe</span>
              <button onClick={() => handleEditClick("name")}>
                {t("application.items.0.buttons.editButton")}
              </button>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">
            {t("commonList.items.0.labels.emailLabel")}
          </label>
          {isEditingEmail ? (
            <InputField
              type="email"
              name="email"
              id="email"
              placeholder={t(
                "application.items.0.placeholders.enterEmailPlaceholder"
              )}
            />
          ) : (
            <div className="field-row">
              <span>john.doe@example.com</span>
              <button onClick={() => handleEditClick("email")}>
                {t("application.items.0.buttons.editButton")}
              </button>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="phoneNumber">
            {t("commonList.items.0.labels.phoneNumberLabel")}
          </label>
          {isEditingPhoneNumber ? (
            <InputField
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder={t(
                "application.items.0.placeholders.enterPhoneNumberPlaceholder"
              )}
            />
          ) : (
            <div className="field-row">
              <span>+1 234 567 890</span>
              <button onClick={() => handleEditClick("phoneNumber")}>
                {t("application.items.0.buttons.editButton")}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="account-options">
        <button onClick={handleShowRecentTransactions}>
          {showRecentTransactions
            ? t("application.items.0.buttons.hideTransactionButton")
            : t("application.items.0.buttons.showTransactionButton")}
        </button>
      </section>

      {showRecentTransactions && (
        <RecentTransactions    // click "Show Recent Transaction" button to see how props data works
          recentTransTitle={recentTransTitle}  // this value get from parent and passing to child (prop drilling)
          description={t(
            "application.items.0.descriptions.recentTransactionDescription"
          )}
          label={t("commonList.items.0.labels.transIdLabel")}
          name="transactionId"
          id="recent-transactions"
          placeholder={t(
            "application.items.0.placeholders.enterTranNumberPlaceholder"
          )}
        />
      )}
    </div>
  );
};

export default AccountSummary;