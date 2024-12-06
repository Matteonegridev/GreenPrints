import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";

function LangSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const changeLang = i18n.language === "it" ? "en" : "it";
    i18next.changeLanguage(changeLang);
  };

  const changeFlag = () => {
    return i18n.language === "it" ? "GB" : "IT";
  };

  return (
    <button
      style={{ right: "16px" }}
      className="fixed bottom-10 flex h-16 w-16 items-center justify-center rounded-full bg-clearDark px-4 py-6 shadow-lg dark:bg-gray-50"
      onClick={changeLanguage}
    >
      <FlagIcon code={changeFlag()} size={32} />
    </button>
  );
}

export default LangSwitch;
