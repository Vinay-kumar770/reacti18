import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import CardComponent from './Cards.tsx';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation(); // to use translation & get data from json file, we have to use useTranslation Hook
  const navigate = useNavigate();

  const [isEnglish, setIsEnglish] = useState(true); // State to keep track of the language

  const handleViewBalance = () => {
    navigate('/see-account-details');
    // Flow after this navigation: AccountDeails --> AccountSummary --> RecentTransactions
  };

  const handleDeposit = () => {
    alert(t("application.items.0.alerts.depositMoneyAlert")); // getting alert message from en.json
  };

  const handleViewTermDeposits = () => {
    alert('Viewing term deposits...');
  };

  const handleViewServices = () => {
    alert('Viewing services...');
  };

  const handleViewTaxBenefits = () => {
    alert('Viewing tax benefits...');
  };

  const handleViewLoans = () => {
    alert('Viewing loans...');
  };

  const handleViewCreditCards = () => {
    alert('Viewing credit cards...');
  };

  const handleGetSupport = () => {
    alert('Getting support...');
  };

  const handleLanguageToggle = () => {
    const newLanguage = isEnglish ? 'hindi' : 'en';
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };


// This data will refelect in english only even you change language since it is harcoded data. Except this data everything will be changed
  const cardDetails = [
    { title: 'Account Details', description: 'Stay updated with your finances by checking your current account status anytime.', buttonText: 'Check Details', onClick: handleViewBalance },
    { title: 'Deposit', description: 'Easily deposit money into your account with just a few clicks.', buttonText: 'Deposit', onClick: handleDeposit },
    { title: 'Term Deposits', description: 'Invest in term deposits and enjoy higher returns on your savings.', buttonText: 'View Term Deposits', onClick: handleViewTermDeposits },
    { title: 'Services', description: 'Discover a wide range of banking services tailored to your needs.', buttonText: 'View Services', onClick: handleViewServices },
    { title: 'Tax Benefits', description: 'Maximize your savings with tax benefits on your investments.', buttonText: 'View Tax Benefits', onClick: handleViewTaxBenefits },
    { title: 'Loans', description: 'Apply for personal and home loans with competitive interest rates.', buttonText: 'View Loans', onClick: handleViewLoans },
    { title: 'Credit Cards', description: 'Manage your credit cards and enjoy exclusive rewards and benefits.', buttonText: 'View Credit Cards', onClick: handleViewCreditCards },
    { title: 'Support', description: 'Reach out to our support team for any assistance you need.', buttonText: 'Get Support', onClick: handleGetSupport },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>{t('commonList.items.0.Headers.bankName')}</h1>
      </header>
      <main className="main-content">
        <h2>{t("application.items.0.literals.welcomeLiteral")}</h2>
        <div className="card-container">
          {cardDetails.map((card, index) => (
            <CardComponent    // click "Check Details" button to see how props data works
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              onClick={card.onClick}
            />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; {t("application.items.0.literals.copyrightLiteral")}</p>
        <button onClick={handleLanguageToggle} className="language-toggle-button">
          {isEnglish ? 'हिंदी में बदलें' : 'Switch to English'}
        </button>
        {isEnglish ? 'Click this button to change language to Hindi' : 'Click this button to change language to English'}
      </footer>
    </div>
  );
};

export default HomePage;
