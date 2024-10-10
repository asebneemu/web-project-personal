import { useState, useEffect } from "react";

function SkillItems() {
  const [skills, setSkills] = useState([]);

  // JSON verilerini çekmek için useEffect kullanıyoruz
  useEffect(() => {
    fetch("/data/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div className="w-full bg-gray-200 p-5">
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 bg-gray-100 mt-[100px] min-h-[450px]">
        <h1 className="text-left text-5xl font-bold pb-5 mt-10 mb-10">My Skills</h1>

        {/* Flexbox ile öğeleri yan yana diziyoruz */}
        <div className="flex flex-wrap justify-between gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white p-8 rounded-lg shadow-md w-[23%]">
              <h3 className="text-3xl font-semibold mb-5">{skill.title}</h3>
              <p className="text-base text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mavi tonlarında ince bir çizgi, 900px genişlik ve ortalanmış */}
        <div className="w-[900px] h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 mt-10 mx-auto mt-20"></div>
      </div>
    </div>
  );
}

export default SkillItems;
