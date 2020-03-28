import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/core';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Button onClick={() => changeLanguage('th')}>Th</Button>
      <Button onClick={() => changeLanguage('en')}>GB</Button>
    </>
  );
};

export default LanguageSwitcher;
