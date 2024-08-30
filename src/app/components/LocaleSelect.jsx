import React from 'react';
import { useCurrentLocale,useChangeLocale } from '../../locales/client';


const LocaleSelect= () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  return (
    <select
      className="bg-transparent border-gray-50 rounded-md px-2 py-1 text-2xl focus:outline-none"
      value={locale}
      onChange={(e) => changeLocale(e.target.value )}
    >
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
    </select>
  );
};

export default LocaleSelect;