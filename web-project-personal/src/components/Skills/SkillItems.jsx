import { useState, useEffect } from "react";

function SkillItems({ darkMode }) {
  const [skillsData, setSkillsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/data.json") // data.json dosyasını public klasöründen çekiyoruz
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        // darkMode'a göre stil verilerini ve skills verilerini ayarlıyoruz
        const modeData = darkMode ? data.skills.darkMode : data.skills.lightMode;
        const skillsList = data.skills.skills; // Burada skills dizisini alıyoruz
        setSkillsData({ ...modeData, skillsList }); // Mode verileri ve skills verilerini birlikte ayarlıyoruz
      })
      .catch((error) => setError(error.message));
  }, [darkMode]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!skillsData) {
    return <div>Loading...</div>; // Veriler yüklenene kadar "Loading" gösterilir
  }

  return (
    <div className={`w-full p-5 ${skillsData.bgColor} ${skillsData.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 mt-[100px] min-h-[450px]">
        <h1 className="text-left text-5xl font-bold pb-5 mt-10 mb-10">Skills</h1>

        {/* Flexbox ile öğeleri yan yana diziyoruz */}
        <div className="flex flex-wrap justify-between gap-4">
          {skillsData.skillsList.map((skill) => (
            <div
              key={skill.id}
              className={`p-8 rounded-lg shadow-md w-[30%] ${skillsData.skillBgColor} ${skillsData.skillTextColor}`}
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
