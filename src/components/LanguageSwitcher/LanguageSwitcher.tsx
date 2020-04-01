import * as React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { Select, Box } from '@chakra-ui/core';

const languageName = {
  en: '🇬🇧 English',
  th: '🇹🇭 ไทย',
  it: '🇮🇹 Italiano',
  es: '🇪🇸 Español',
  el: '🇬🇷 Ελληνικά',
  'zh-Hans': '🇨🇳 简体中文',
  'zh-Hant': '🇨🇳 中文維基百科'
};

const LanguageSwitcher: React.FC = () => {
  return (
    <Box width="4em" alignSelf="flex-end">
      <IntlContextConsumer>
        {({
          languages,
          language: currentLocale
        }: {
          languages: string[];
          currentLocale: string;
        }) => (
          <Select
            onChange={({ currentTarget }) => changeLocale(currentTarget.value)}
            size="sm"
            placeholder={languageName[currentLocale]}
          >
            {languages.map((code: string) => (
              <option key={code} value={code}>
                {languageName[code]}
              </option>
            ))}
          </Select>
        )}
      </IntlContextConsumer>
    </Box>
  );
};

export default LanguageSwitcher;
