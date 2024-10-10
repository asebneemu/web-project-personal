import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  // JSON verisini çekmek için useEffect kullanıyoruz
  useEffect(() => {
    fetch("/data/projects.json") // public klasöründen projects.json dosyasını çekiyoruz
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="w-full p-5">
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5">
        {/* Başlık sola yaslanmış ve büyütülmüş */}
        <h1 className="mt-5 text-left text-5xl font-bold mb-10">Projects</h1>
        
        {/* Proje verilerini map fonksiyonu ile listeliyoruz */}
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          {projects.map((project) => (
            <div key={project.id} className="w-[27%] bg-white p-4 rounded-lg shadow-md">
              {/* shadow-md silinerek projectslerin etrafındaki çerçeve yok edilebilir */}
              {/* Proje Resmi */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              
              {/* Proje Başlığı */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              
              {/* İlk Div: Üç buton içeren div */}
              <div className="flex gap-4 justify-start mb-4">
                <button className="bg-white text-black border-2 border-black text-sm px-2 py-1 rounded">react</button>
                <button className="bg-white text-black border-2 border-black text-sm px-2 py-1 rounded">redux</button>
                <button className="bg-white text-black border-2 border-black text-sm px-2 py-1 rounded">axios</button>
              </div>

              {/* İkinci Div: İki buton içeren div (Sola ve Sağa yaslı) */}
              <div className="flex justify-between">
                <button className="text-black-500 border-b-2 border-black-500 px-2 py-1">Github</button>
                <button className="text-black-500 border-b-2 border-black-500 px-2 py-1">View Site</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
