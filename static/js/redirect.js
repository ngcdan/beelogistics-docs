(function () {
  const userLang = navigator.language || navigator.userLanguage;
  const supportedLocales = ['vi', 'en', 'zh-Hans'];
  const defaultLocale = 'vi';

  // Determine the best locale to use
  const locale = supportedLocales.includes(userLang) ? userLang : defaultLocale;
  const currentPath = window.location.pathname;

  // Regular expression to match any of the supported locales at the start of the path
  const localeRegex = new RegExp(`^/(${supportedLocales.join('|')})`);

  // Remove any existing locale from the path
  const newPath = currentPath.replace(localeRegex, '');

  // Redirect if the path does not start with the correct locale
  if (!currentPath.startsWith(`/${locale}`)) {
    window.location.replace(`/${locale}${newPath}`);
  }
})();