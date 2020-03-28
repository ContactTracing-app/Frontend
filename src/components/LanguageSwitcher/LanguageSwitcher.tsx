import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/core';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return <Button onClick={() => i18n.changeLanguage('th')}>Th</Button>;
};

export default LanguageSwitcher;
