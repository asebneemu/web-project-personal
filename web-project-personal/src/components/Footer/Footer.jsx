import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

// eslint-disable-next-line react/prop-types
function Footer({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  return (
    <div className={`w-full p-5 ${darkMode ? 'bg-gray-500 text-white' : 'bg-gray-100 text-black'}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5">
        {/* İlk Div: Yazı */}
        <div className="w-[45%]">
          <h2 className="text-4xl font-bold text-left">{content.footer.heading}</h2>
        </div>

        {/* İkinci Div: Paragraf ve butonlar */}
        <div className="w-full mt-5 flex items-center">
          {/* Paragraf sola yaslı ve genişliğini kaplar */}
          <p className="flex-grow text-left mt-[5%]">{content.footer.paragraph}</p>

          {/* Butonların olduğu div sağa yaslanır */}
          <div className="flex gap-4 justify-end">
            <button className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
              {content.footer.buttons.personalBlog}
            </button>

            {/* Github button */}
            <button className="px-4 py-2 rounded bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-in-out">
              {content.footer.buttons.github}
            </button>

            {/* Linkedin button - Maviden mora geçiş */}
            <button className="px-4 py-2 rounded bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-in-out">
              {content.footer.buttons.linkedin}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
