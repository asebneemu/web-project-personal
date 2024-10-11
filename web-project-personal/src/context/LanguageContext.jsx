import { createContext, useState, useContext } from 'react';
import data from '../data/data.json'; // data dosyanızın yeni yolu

// Context oluşturma
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Başlangıçta İngilizce seçili
  console.log(data);

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'tr' : 'en'));
  };

  // Seçilen dile göre datayı ayarlama
  const value = {
    language,
    content: data[language], // Seçilen dilin verilerini buradan alıyoruz
    toggleLanguage, // Dil değiştirme fonksiyonunu sağlayalım
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Context'i kullanmak için bir custom hook oluşturma
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
