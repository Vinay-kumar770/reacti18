# React Components with Jest Testing

This repository contains **React components** implemented with **TypeScript**, along with their corresponding **I18next Implementation**. These components demonstrate the proper usage of i18next to get values from seperate json files according to language change

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

## Components Overview

# HomePage Component

The `HomePage` component is a React functional component that provides a user interface for a banking application. It includes various features such as viewing account details, depositing money, and toggling between English and Hindi languages using i18next for translations.

## Features

### 1. **Account Details**
- **Description**: Stay updated with your finances by checking your current account status anytime.
- **Button Text**: Check Details
- **Function**: `handleViewBalance`

### 2. **Deposit**
- **Description**: Easily deposit money into your account with just a few clicks.
- **Button Text**: Deposit
- **Function**: `handleDeposit`

### 3. **Term Deposits**
- **Description**: Invest in term deposits and enjoy higher returns on your savings.
- **Button Text**: View Term Deposits
- **Function**: `handleViewTermDeposits`

### 4. **Services**
- **Description**: Discover a wide range of banking services tailored to your needs.
- **Button Text**: View Services
- **Function**: `handleViewServices`

### 5. **Tax Benefits**
- **Description**: Maximize your savings with tax benefits on your investments.
- **Button Text**: View Tax Benefits
- **Function**: `handleViewTaxBenefits`

### 6. **Loans**
- **Description**: Apply for personal and home loans with competitive interest rates.
- **Button Text**: View Loans
- **Function**: `handleViewLoans`

### 7. **Credit Cards**
- **Description**: Manage your credit cards and enjoy exclusive rewards and benefits.
- **Button Text**: View Credit Cards
- **Function**: `handleViewCreditCards`

### 8. **Support**
- **Description**: Reach out to our support team for any assistance you need.
- **Button Text**: Get Support
- **Function**: `handleGetSupport`

## I18next Implementation

The `HomePage` component uses the `useTranslation` hook from the `react-i18next` library to handle translations. This allows the component to switch between English and Hindi languages.

### Key Points:
- **useTranslation Hook**: Used to access translation functions and current language.
- **Language Toggle**: A button to switch between English and Hindi.
- **Translation Keys**: Used to fetch translated strings from JSON files.

### Example Usage:
```jsx
const { t, i18n } = useTranslation(); // to use translation & get data from json file, we have to use useTranslation Hook

const handleLanguageToggle = () => {
  const newLanguage = isEnglish ? 'hindi' : 'en';
  i18n.changeLanguage(newLanguage);
  setIsEnglish(!isEnglish);
};
