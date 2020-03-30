import * as React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { Button } from '@chakra-ui/core';

const languageName = {
  en: '🇬🇧 English',
  th: '🇹🇭 ไทย'
};

const LanguageSwitcher: React.FC = () => {
  return (
    <IntlContextConsumer>
      {({
        languages,
        language: currentLocale
      }: {
        languages: string[];
        currentLocale: string;
      }) =>
        languages.map((code: string) => (
          <Button
            isDisabled={code === currentLocale}
            size="sm"
            key={code}
            onClick={() => changeLocale(code)}
          >
            {languageName[code]}
          </Button>
        ))
      }
    </IntlContextConsumer>
  );
};

export default LanguageSwitcher;
