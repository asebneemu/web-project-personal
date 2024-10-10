import { useEffect, useState } from 'react';
import resim from './person.jpeg';

function Header({ darkMode }) {
  const [headerData, setHeaderData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        // darkMode true ise darkMode verilerini, değilse lightMode verilerini alıyoruz
        const modeData = darkMode ? data.header.darkMode : data.header.lightMode;
        const contentData = data.header.content;
        setHeaderData({ ...modeData, ...contentData });
      })
      .catch((error) => setError(error.message));
  }, [darkMode]); // darkMode değiştiğinde yeniden fetch yapar

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!headerData) {
    return <div>Loading...</div>; // Veriler yüklenene kadar loading
  }

  return (
    <div className={`w-full p-5 ${headerData.bgColor} ${headerData.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <header className="w-[1140px] h-auto flex mx-auto">
        {/* İlk div: Genişliğin %55'ini kaplayan div */}
        <div className="w-[55%] flex flex-col justify-start pt-4 pl-4">
          {/* İç div: Çizgi ve Aleyna Şebnem Uçak yazısı */}
          <div className="flex items-center space-x-4">
            {/* 30px uzunluğunda çizgi */}
            <div className={`w-[70px] h-[2px] ${darkMode ? 'bg-white' : 'bg-black'}`}></div>

            {/* İsim yazısı */}
            <span className="text-xl font-semibold pl-4">{headerData.name}</span>
          </div>

          {/* H1: Creative thinker, Minimalism lover */}
          <h1 className="mt-4 text-6xl font-bold pt-10">{headerData.title}</h1>

          {/* P: Paragraf metni */}
          <p className="mt-2 text-lg pt-10 pr-20">
            {headerData.description}
          </p>

          {/* Div: Üç butondan oluşan container */}
          <div className="mt-4 space-x-4 pt-20 pb-5">
            <button className={`px-4 py-2 rounded ${headerData.buttonBgColor} ${headerData.buttonTextColor} hover:bg-[#3730A3] hover:text-white`}>
              {headerData.buttons.hireMe}
            </button>
            <button className={`px-4 py-2 rounded ${headerData.buttonBgColor} ${headerData.buttonTextColor} hover:bg-[#3730A3] hover:text-white`}>
              {headerData.buttons.github}
            </button>
            <button className={`px-4 py-2 rounded ${headerData.buttonBgColor} ${headerData.buttonTextColor} hover:bg-[#3730A3] hover:text-white`}>
              {headerData.buttons.linkedin}
            </button>
          </div>
        </div>

        {/* İkinci div: Genişliğin %45'ini kaplayan div, ortalanmış resim */}
        <div className="w-[45%] flex justify-center items-center">
          {/* Resim */}
          <img src={resim} alt="Placeholder" className="h-[428px] object-contain" />
        </div>
      </header>
    </div>
  );
}

export default Header;
