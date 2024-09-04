import React from "react";
import { useI18n } from "../../locales/client";

const DownloadButton = () => {
  const t = useI18n();
  return (
    <a
      href="/CV Cléophas Fournier.pdf"
      download="CV Cléophas Fournier.pdf"
      className="flex items-center justify-center px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-slate-800 text-white mt-3"
    >
      <button className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 w-full">
        {t("cv")}
      </button>
    </a>
  );
};

export default DownloadButton;
