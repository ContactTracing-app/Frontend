// i18next-parser.config.js

module.exports = {
  defaultNamespace: 'common',
  // Default namespace used in your i18next config

  locales: ['en', 'th'],
  // An array of the locales in your applications
  output: './src/locales/$LOCALE/$NAMESPACE.json',
  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()

  reactNamespace: false,
  // For react file, extract the defaultNamespace - https://react.i18next.com/components/translate-hoc.html
  // Ignored when parsing a `.jsx` file and namespace is extracted from that file.

  sort: true,
  // Whether or not to sort the catalog
  verbose: false
  // Display info about the parsing including some stats
};
