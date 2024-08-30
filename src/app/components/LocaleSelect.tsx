"use client";
import { useCurrentLocale, useChangeLocale } from "../../locales/client";

export const LocaleSelect = () => {
    const locale = useCurrentLocale();
    console.log(locale);
    const changeLocale = useChangeLocale();

    return (
        <select
            className="bg-transparent border-gray-50 rounded-md px-2 py-1 text-2xl focus:outline-none"
            value={locale} // Correctly place the value attribute here
            onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
        >
            <option value="en">🇬🇧</option>
            <option value="fr">🇫🇷</option>
        </select>
    );
};
