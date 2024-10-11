import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

// eslint-disable-next-line react/prop-types
function Heroes({ darkMode }) {
  // Dark mode'a göre stilleri ayarlıyoruz
  const styles = darkMode
    ? {
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        buttonBgColor: 'bg-gray-700',
        buttonTextColor: 'text-white',
        circleBgColor: 'bg-[#EEEBFF]',
        circleTextColor: 'text-[#3730A3]',
        buttonBorderColor: 'border-[#3730A3]',
      }
    : {
        bgColor: 'bg-white',
        textColor: 'text-black',
        buttonBgColor: 'bg-white',
        buttonTextColor: 'text-[#3730A3]',
        circleBgColor: 'bg-[#EEEBFF]',
        circleTextColor: 'text-[#3730A3]',
        buttonBorderColor: 'border-transparent',
      };

  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

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
            {content.heroes.skillsText}
          </button>
          <button className={`px-4 py-2 border-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor} hover:border-[#3730A3]`}>
            {content.heroes.projectsText}
          </button>
          <button className={`px-4 py-2 border-2 rounded ${styles.buttonBgColor} ${styles.buttonTextColor} ${styles.buttonBorderColor} hover:border-[#3730A3]`}>
            {content.heroes.hireMeText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
