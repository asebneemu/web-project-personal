import { useState, useEffect } from "react";

function ProfileComponent({ darkMode }) {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")  // public klasöründen data.json dosyasını çekiyoruz
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        // darkMode'a göre stil verilerini ve profil verilerini ayarlıyoruz
        const modeData = darkMode ? data.profile.darkMode : data.profile.lightMode;
        const profile = data.profile.data;  // Profile verisini JSON'dan çekiyoruz
        setProfileData({ ...modeData, ...profile });
      })
      .catch((error) => setError(error.message));
  }, [darkMode]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>Loading...</div>;  // Veriler yüklenene kadar "Loading" gösterilir
  }

  return (
    <div className={`w-full p-5 ${profileData.bgColor} ${profileData.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 mb-[100px]">
        <h1 className="text-left text-6xl font-bold">Profile</h1>

        {/* Alt div - İki div yanyana, eşit aralıklarla ortalanmış */}
        <div className="flex justify-between mt-10">
          {/* İlk Div: Profile bilgileri */}
          <div className={`w-[48%] p-5 rounded shadow-lg ${profileData.sectionBgColor} ${profileData.sectionTextColor}`}>
            <h3 className="text-2xl font-semibold mb-5">Profile</h3>
            <ul className="list-none space-y-4">
              <li><strong>Doğum Tarihi:</strong> {profileData.birthDate}</li>
              <li><strong>İkametgah Yeri:</strong> {profileData.location}</li>
              <li><strong>Eğitim Durumu:</strong> {profileData.education}</li>
              <li><strong>Tercih Ettiği Rol:</strong> {profileData.preferredRole}</li>
            </ul>
          </div>

          {/* İkinci Div: About Me kısmı */}
          <div className={`w-[48%] p-5 rounded shadow-lg ${profileData.sectionBgColor} ${profileData.sectionTextColor}`}>
            <h3 className="text-2xl font-semibold mb-5">About Me</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
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
