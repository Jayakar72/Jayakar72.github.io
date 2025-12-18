import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/languageToggle.scss';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return ();
};


export default LanguageToggle;
