import { useEffect, useState } from 'react';

function Heroes({ darkMode }) {
  const [styles, setStyles] = useState(null); // JSON verilerini tutmak için state
  const [error, setError] = useState(null); // Hata mesajını tutmak için

  // JSON verisini fetch ile alıyoruz
  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        setStyles(darkMode ? data.heroes.darkMode : data.heroes.lightMode);
      })
      .catch((error) => setError(error.message));
  }, [darkMode]); // darkMode değiştiğinde yeniden fetch yapılacak

  if (error) {
    return <div>Error: {error}</div>; // Hata mesajı varsa göster
  }

  if (!styles) {
    return <div>Loading...</div>; // Veriler yüklenene kadar loading
  }

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1141.46px] h-[62px] flex justify-between items-center mx-auto px-4 mt-[70px] mb-8">
        {/* İlk div: Çevresinde çember olan "A" harfi butonu */}
        <button className={`flex justify-center items-center w-14 h-14 rounded-full ${styles.circleBgColor}`}>
          <span className={`text-3xl font-normal ${styles.circleTextColor}`}>A</span>
        </button>

        {/* İkinci div: Üç adet buton */}
        <div className="flex space-x-4">
          <button className={`px-4 py-2 border-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor} hover:border-[#3730A3]`}>
            Skills
          </button>
          <button className={`px-4 py-2 border-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor} hover:border-[#3730A3]`}>
            Projects
          </button>
          <button className={`px-4 py-2 border-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor} hover:border-[#3730A3]`}>
            Hire Me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
