import { useState, useEffect } from "react";

function ProfileComponent() {
  const [profile, setProfile] = useState({});

  // JSON verisini çekmek için useEffect kullanıyoruz
  useEffect(() => {
    fetch("/data/profile.json")  // public klasöründen profile.json dosyasını çekiyoruz
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  return (
    <div className="w-full p-5">
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 mb-[100px]">
        <h1 className="text-left text-6xl font-bold">Profile</h1>

        {/* Alt div - İki div yanyana, eşit aralıklarla ortalanmış */}
        <div className="flex justify-between mt-10">
          {/* İlk Div: Profile bilgileri */}
          <div className="w-[48%] bg-white p-5 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-5">Profile</h3>
            <ul className="list-none space-y-4">
              <li><strong>Doğum Tarihi:</strong> {profile.birthDate}</li>
              <li><strong>İkametgah Yeri:</strong> {profile.location}</li>
              <li><strong>Eğitim Durumu:</strong> {profile.education}</li>
              <li><strong>Tercih Ettiği Rol:</strong> {profile.preferredRole}</li>
            </ul>
          </div>

          {/* İkinci Div: About Me kısmı */}
          <div className="w-[48%] bg-white p-5 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-5">About Me</h3>
            <p className="text-gray-700">
              I am a highly motivated and dedicated individual with a passion for learning and development. I have a strong interest in frontend development, and I am eager to contribute to meaningful projects that help people and solve real-world problems. I enjoy working in teams, solving challenges, and continuously improving my skills.
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
