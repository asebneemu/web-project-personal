import { useState, useEffect } from "react";

function Projects({ darkMode }) {
  const [projectsData, setProjectsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/data.json") // public klasöründen data.json dosyasını çekiyoruz
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        // darkMode'a göre stil verilerini ve proje verilerini ayarlıyoruz
        const modeData = darkMode ? data.projects.darkMode : data.projects.lightMode;
        const projects = data.projects.projects; // Proje verilerini JSON'dan çekiyoruz
        setProjectsData({ ...modeData, projects });
      })
      .catch((error) => setError(error.message));
  }, [darkMode]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!projectsData) {
    return <div>Loading...</div>; // Veriler yüklenene kadar "Loading" gösterilir
  }

  return (
    <div className={`w-full p-5 ${projectsData.bgColor} ${projectsData.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5">
        {/* Başlık sola yaslanmış ve büyütülmüş */}
        <h1 className="mt-5 text-left text-5xl font-bold mb-10">Projects</h1>
        
        {/* Proje verilerini map fonksiyonu ile listeliyoruz */}
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className={`w-[27%] p-4 rounded-lg shadow-md ${projectsData.projectBgColor} ${projectsData.projectTextColor}`}
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
                  className={`border-2 text-sm px-2 py-1 rounded ${projectsData.buttonBgColor} ${projectsData.buttonTextColor} ${projectsData.buttonBorderColor}`}
                >
                  react
                </button>
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${projectsData.buttonBgColor} ${projectsData.buttonTextColor} ${projectsData.buttonBorderColor}`}
                >
                  redux
                </button>
                <button
                  className={`border-2 text-sm px-2 py-1 rounded ${projectsData.buttonBgColor} ${projectsData.buttonTextColor} ${projectsData.buttonBorderColor}`}
                >
                  axios
                </button>
              </div>

              {/* İkinci Div: İki buton içeren div (Sola ve Sağa yaslı) */}
              <div className="flex justify-between">
                <button className={`border-b-2 px-2 py-1 ${projectsData.buttonTextColor}`}>
                  Github
                </button>
                <button className={`border-b-2 px-2 py-1 ${projectsData.buttonTextColor}`}>
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
