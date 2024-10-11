import resim from './person.jpeg';
import { useLanguage } from '../../context/LanguageContext'; // LanguageContext'i import ediyoruz

function Header({ darkMode }) {
  // Dark mode'a göre stilleri ayarlıyoruz
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        buttonBgColor: 'bg-gray-700',
        buttonTextColor: 'text-white',
      }
    : {
        bgColor: 'bg-white',
        textColor: 'text-black',
        buttonBgColor: 'bg-white',
        buttonTextColor: 'text-[#3730A3]',
      };

  // Dil yönetimi için useLanguage hook'u
  const { content } = useLanguage(); // Context'ten gelen veriyi kullanıyoruz

  return (
    <div className={`w-full p-5 ${styles.bgColor} ${styles.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <header className="w-[1140px] h-auto flex mx-auto">
        {/* İlk div: Genişliğin %55'ini kaplayan div */}
        <div className="w-[55%] flex flex-col justify-start pt-4 pl-4">
          {/* İç div: Çizgi ve Aleyna Şebnem Uçak yazısı */}
          <div className="flex items-center space-x-4">
            {/* 30px uzunluğunda çizgi */}
            <div className={`w-[70px] h-[2px] ${darkMode ? 'bg-white' : 'bg-black'}`}></div>

            {/* İsim yazısı */}
            <span className="text-xl font-semibold pl-4">{content.header.name}</span>
          </div>

          {/* H1: Creative thinker, Minimalism lover */}
          <h1 className="mt-4 text-6xl font-bold pt-10">{content.header.title}</h1>

          {/* P: Paragraf metni */}
          <p className="mt-2 text-lg pt-10 pr-20">
            {content.header.description}
          </p>

          {/* Div: Üç butondan oluşan container */}
          <div className="mt-4 space-x-4 pt-20 pb-5">
            <button
              className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} hover:bg-[#3730A3] hover:text-white`}
            >
              {content.header.buttons.hireMe}
            </button>
            <button
              className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} hover:bg-[#3730A3] hover:text-white`}
            >
              {content.header.buttons.github}
            </button>
            <button
              className={`px-4 py-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} hover:bg-[#3730A3] hover:text-white`}
            >
              {content.header.buttons.linkedin}
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
