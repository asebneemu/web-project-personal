import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

function Projects({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  return (
    <div className={`w-full p-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5">
        {/* Başlık sola yaslanmış ve büyütülmüş */}
        <h1 className="mt-5 text-left text-5xl font-bold mb-10">{content.heroes.projectsText}</h1>

        {/* Proje verilerini map fonksiyonu ile listeliyoruz */}
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          {content.projects.map((project) => (
            <div
              key={project.id}
              className={`w-[27%] p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            >
              {/* Proje Resmi */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Proje Başlığı */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* İlk Div: Üç buton içeren div */}
              <div className="flex gap-4 justify-start mb-4">
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-white border-white' : 'bg-white text-[#3730A3] border-[#3730A3]'}`}
                >
                  react
                </button>
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-white border-white' : 'bg-white text-[#3730A3] border-[#3730A3]'}`}
                >
                  redux
                </button>
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-white border-white' : 'bg-white text-[#3730A3] border-[#3730A3]'}`}
                >
                  axios
                </button>
              </div>

              {/* İkinci Div: İki buton içeren div (Sola ve Sağa yaslı) */}
              <div className="flex justify-between">
                <button className={`border-b-2 px-2 py-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                  Github
                </button>
                <button className={`border-b-2 px-2 py-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                  View Site
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
