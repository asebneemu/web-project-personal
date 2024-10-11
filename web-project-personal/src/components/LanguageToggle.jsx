import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Dil context'ini kullanıyoruz

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext); // Context'ten language ve toggleLanguage alıyoruz

  return (
    <button
      onClick={toggleLanguage}
      className="text-[14] font-normal p-4  text-black rounded"
    >
      {language === 'en' ? (
        <>
          <span className="text-[#FFFF00]">Türkçe</span> {/* Neon sarı sadece Türkçe kelimesi */}
          ye Geç
        </>
      ) : (
        'Switch to English'
      )}
    </button>
  );
}

export default LanguageToggle;
