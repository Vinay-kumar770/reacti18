import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage.tsx';
import AccountDetails from './Components/AccountDetails.tsx';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

const App: React.FC = () => {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/see-account-details" element={<AccountDetails />} />
      </Routes>
      </I18nextProvider>
    </Router>
  );
};

export default App;