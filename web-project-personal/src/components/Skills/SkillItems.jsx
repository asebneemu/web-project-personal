import { useLanguage } from '../../context/LanguageContext'; // Dil context'ini kullanıyoruz

function SkillItems({ darkMode }) {
  // Dil ve içerik verilerini alıyoruz
  const { content } = useLanguage();

  return (
    <div className={`w-full p-5 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 mt-[100px] min-h-[450px]">
        <h1 className="text-left text-5xl font-bold pb-5 mt-10 mb-10">
          Skills
        </h1>

        {/* Flexbox ile öğeleri yan yana diziyoruz */}
        <div className="flex flex-wrap justify-between gap-4">
          {content.skills.map((skill) => (
            <div
              key={skill.id}
              className={`p-8 rounded-lg shadow-md w-[30%] ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
            >
              <h3 className="text-3xl font-semibold mb-5">{skill.title}</h3>
              <p className="text-base">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Mavi tonlarında ince bir çizgi */}
        <div className="w-[1140px] h-[2px] bg-gradient-to-r from-green-400 to-purple-600 mt-10 mx-auto mt-20"></div>
      </div>
    </div>
  );
}

export default SkillItems;
