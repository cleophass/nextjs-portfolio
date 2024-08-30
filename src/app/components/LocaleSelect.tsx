import React from 'react';

type Locale = "fr" | "en";

interface LocaleSelectProps {
  locale: Locale;
  changeLocale: (newLocale: Locale) => void;
}

const LocaleSelect: React.FC<LocaleSelectProps> = ({ locale, changeLocale }) => {
  return (
    <select
      className="bg-transparent border-gray-50 rounded-md px-2 py-1 text-2xl focus:outline-none"
      value={locale}
      onChange={(e) => changeLocale(e.target.value as Locale)}
    >
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
    </select>
  );
};

export default LocaleSelect;