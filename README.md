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
