import * as React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { Select, Box } from '@chakra-ui/core';

const languageName = {
  'zh-Hans': '简体中文',
  'zh-Hant': '中文維基百科',
  ar: 'اَلْعَرَبِيَّةُ',
  el: 'Ελληνικά',
  en: 'English',
  es: 'Español',
  he: 'עברית',
  it: 'Italiano',
  ko: '한국어',
  'pt-BR': 'português brasileiro',
  ru: 'русский язык',
  ta: 'தமிழ்',
  th: 'ไทย',
  tr: 'Türkçe'
};

const LanguageSwitcher: React.FC = () => {
  return (
    <Box width="10em" alignSelf="flex-end">
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
              size="md"
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
