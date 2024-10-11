import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

function ProfileComponent({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  return (
    <div className={`w-full p-5 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 mb-[100px]">
        <h1 className="text-left text-6xl font-bold">{content.profile.title}</h1>

        {/* Alt div - İki div yanyana, eşit aralıklarla ortalanmış */}
        <div className="flex justify-between mt-10">
          {/* İlk Div: Profile bilgileri */}
          <div className={`w-[48%] p-5 rounded shadow-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}>
            <h3 className="text-2xl font-semibold mb-5">{content.profile.title}</h3>
            <ul className="list-none space-y-4">
              <li><strong>{content.profile.dogumTarihi}</strong> {content.profile.birthDate}</li>
              <li><strong>{content.profile.lokasyon}</strong> {content.profile.location}</li>
              <li><strong>{content.profile.ogrenimDurumu}</strong> {content.profile.education}</li>
              <li><strong>{content.profile.rol}</strong> {content.profile.preferredRole}</li>
            </ul>
          </div>

          {/* İkinci Div: About Me kısmı */}
          <div className={`w-[48%] p-5 rounded shadow-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}>
            <h3 className="text-2xl font-semibold mb-5">{content.profile.altBaslik}</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {content.profile.aboutMe}
            </p>
          </div>
        </div>

        {/* Mavi tonlarında ince bir çizgi */}
        <div className="w-[1140px] h-[2px] bg-gradient-to-r from-green-400 to-purple-600 mt-10 mx-auto mt-20"></div>
      </div>
    </div>
  );
}

export default ProfileComponent;
