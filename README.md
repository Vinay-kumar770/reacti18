# React Components with Jest I18n Implementation

This repository contains **React components** implemented with **TypeScript**, along with their corresponding **I18next Implementation**. These components demonstrate the proper usage of i18next to get values from seperate json files according to language change

---

# i18n Configuration

This configuration file sets up internationalization for the application using `i18next` and `react-i18next`.

## Setup

1. **Import Dependencies**:
   - `i18next` for core functionality.
   - `initReactI18next` to integrate with React.
   - Language JSON files for translations.

2. **Resource Object**:
   - Contains translation data for each language.
   - Example: English (`en`) and Hindi (`hindi`).

3. **Initialization**:
   - `use(initReactI18next)`: Integrates i18next with React.
   - `init` method:
     - `resources`: Translation data.
     - `lng`: Default language (English).
     - `fallbackLng`: Fallback language if translation is missing.
     - `interpolation.escapeValue`: Prevents XSS attacks.

---

## Components Overview

This project includes the following components:

### AccountDetails
- **Description**: Main component that displays account details and options to view account summary and recent transactions.

### AccountSummary
- **Description**: Displays account summary with fields for account number, name, email, and phone number, each with an edit option.

### RecentTransactions
- **Description**: Displays recent transactions with a field to enter transaction ID.

### InputField
- **Description**: Reusable input field component that accepts props for name, type, id, and placeholder.

---

## How to Install Modules

To install the required dependencies, run the following command:

```bash
npm install
```
or

```bash
npm install --force
```

---
## How to Run the Project

To start the project locally, use the following command:

```bash
npm start
```

---

# Components Overview with I18n Implementations

## HomePage Component

The `HomePage` component is a React functional component that provides a user interface for a banking application. It includes various features such as viewing account details, depositing money, and toggling between English and Hindi languages using i18next for translations.

### I18next Implementation

The `HomePage` component uses the `useTranslation` hook from the `react-i18next` library to handle translations. This allows the component to switch between English and Hindi languages.

#### Key Points:
- **useTranslation Hook**: Used to access translation functions and current language.
- **Language Toggle**: A button to switch between English and Hindi.
- **Translation Keys**: Used to fetch translated strings from JSON files.
- **t("application.items.0.alerts.depositMoneyAlert")** is used to fetch a translated string from the JSON translation files
- **t("application.items.0.alerts.depositMoneyAlert")** will return **"Your deposit was successful!"** if the current language is set to English. If the language is switched to Hindi, it will return the corresponding Hindi translation from the hindi.json file

#### Example Usage:
```jsx
const { t, i18n } = useTranslation(); // to use translation & get data from json file, we have to use useTranslation Hook

const handleLanguageToggle = () => {
  const newLanguage = isEnglish ? 'hindi' : 'en';
  i18n.changeLanguage(newLanguage);
  setIsEnglish(!isEnglish);
};
```

## AccountDetails Component

The `AccountDetails` component is a React functional component that provides detailed information about a user's account. It includes features such as displaying account summaries and recent transactions, with support for multilingual translations using i18next.

### I18next Implementation

The `AccountDetails` component uses the `useTranslation` hook from the `react-i18next` library to handle translations. This allows the component to display content in multiple languages.

#### Key Points:
- **useTranslation Hook**: Used to access translation functions and current language.
- **Translation Keys**: Used to fetch translated strings from JSON files.
- **t("application.items.0.titles.accountDetailsTitle")** is used to fetch a translated string from the JSON translation files.
- **t("application.items.0.titles.accountDetailsTitle")** will return **"Account Details"** if the current language is set to English. If the language is switched to Hindi, it will return the corresponding Hindi translation from the `hindi.json` file.

#### Example Usage:
```jsx
const { t } = useTranslation(); // to use translation & get data from json file, we have to use useTranslation Hook

return (
  <div className="account-details-container">
    <h2>{t("application.items.0.titles.accountDetailsTitle")}</h2>

    <AccountSummary
      accountSummaryTitle="Passing title Account Summary"   // if you're not sending this prop data, default value will reflect from en.json
      recentTransTitle="Recent Transactions"  // This value goes as prop drilling... flow: AccountDetails --> AccountSummary --> RecentTransactions Component. If this value isn't passed, the default value set as Title for RecentTransaction
      description={t("application.items.0.descriptions.accountSummaryDescription")}
    />
  </div>
);
```

## AccountSummary Component

The `AccountSummary` component is a React functional component that provides a summary of a user's account information. It includes features such as editing account details and viewing recent transactions, with support for multilingual translations using i18next.

### I18next Implementation

The `AccountSummary` component uses the `useTranslation` hook from the `react-i18next` library to handle translations. This allows the component to display content in multiple languages.

#### Key Points:
- **useTranslation Hook**: Used to access translation functions and current language.
- **Translation Keys**: Used to fetch translated strings from JSON files.
- **t("application.items.0.titles.accountSummaryTitle")** is used to fetch a translated string from the JSON translation files.
- **t("application.items.0.titles.accountSummaryTitle")** will return **"Account Summary"** if the current language is set to English. If the language is switched to Hindi, it will return the corresponding Hindi translation from the `hindi.json` file.
- **accountsummary** condition written because if the values are getting from prop then it will reflect else the default value from JSON file will reflect to the screen

#### Example Usage:
```jsx
const { t } = useTranslation(); // to use translation & get data from json file, we have to use useTranslation Hook

return (
  <div>
    <section className="account-summary">
      <h3 className="highlight-title">
        {accountSummaryTitle === ""
          ? t("application.items.0.titles.accountSummaryTitle")
          : accountSummaryTitle}
      </h3>
      <p>
        {description === ""
          ? t("application.items.0.descriptions.accountSummaryDescription")
          : description}
      </p>
      {/* Additional fields and logic */}
    </section>
  </div>
);
```

#### keypoint-2:
- **showRecentTransactions** have passing the prop value to child which is getting from the parent component of **AccounSummary** (basically the prop drilling)

#### Example Usage
```jsx
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
```

## RecentTransactions Component

The `RecentTransactions` component is a React functional component that displays recent transactions for a user's account. It includes features such as displaying transaction details and providing options for transferring funds, downloading statements, and updating account settings, with support for multilingual translations using i18next.

### I18next Implementation

The `RecentTransactions` component uses the `useTranslation` hook from the `react-i18next` library to handle translations. This allows the component to display content in multiple languages.

#### Key Points:
- **useTranslation Hook**: Used to access translation functions and current language.
- **Translation Keys**: Used to fetch translated strings from JSON files.
- **t("application.items.0.titles.defaultTitle")** is used to fetch a translated string from the JSON translation files.
- **t("application.items.0.titles.defaultTitle")** will return **"Recent Transactions"** if the current language is set to English. If the language is switched to Hindi, it will return the corresponding Hindi translation from the `hindi.json` file.
- **recentTransTitle** this prop value im getting from parent's parent component (by prop drilling) & writing condition if i didn't get this value, the default value reflect to screen from json file

#### Example Usage:
```jsx
const { t } = useTranslation(); // to use translation & get data from json file, we have to use useTranslation Hook

return (
  <div>
    <section className="recent-transactions" id={id}>
      <h3 className="highlight-title">
        {recentTransTitle === "" ? t("application.items.0.titles.defaultTitle") : recentTransTitle}
      </h3>
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
```

## i18n JSON Structure

This JSON file is used for internationalization (i18n) to provide multilingual support for the application. The file is divided into two main sections: `commonList` and `application`.

### Sections Overview

#### 1. **commonList**
The `commonList` section contains values that are common to multiple microfrontends. This ensures consistency across different parts of the application.

##### Structure:
- **items**: An array of objects containing common elements.
  - **Headers**: Contains common header values.
  - **labels**: Contains common label values.
  - **(you can add multiple sub-section)**

#### 2. **application**
The `application` section contains values that are specific to this particular microfrontend. This includes strings for alerts, HTML tag contents, button texts, error messages, and other user-visible elements that need to be translated.

##### Structure:
- **items**: An array of objects containing application-specific elements.
  - **titles**: Contains titles used in the application.
  - **descriptions**: Contains descriptions used in the application.
  - **literals**: Contains literal strings used in the application.
  - **messages**: Contains messages used in the application.
  - **placeholders**: Contains placeholder texts used in the application.
  - **buttons**: Contains button texts used in the application.
  - **alerts**: Contains alert messages used in the application.
  - **(you can add multiple sub-section)**

### Conclusion

This JSON structure ensures that all user-visible strings in the application can be easily translated, providing a seamless multilingual experience. The `commonList` section maintains consistency across multiple microfrontends, while the `application` section caters to specific needs of this microfrontend.
