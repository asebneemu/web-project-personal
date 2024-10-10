import { useState, useEffect } from "react";

function Footer({ darkMode }) {
  const [footerData, setFooterData] = useState(null);
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
        // darkMode'a göre stil verilerini ve footer verilerini ayarlıyoruz
        const modeData = darkMode ? data.footer.darkMode : data.footer.lightMode;
        const contentData = data.footer.content;
        setFooterData({ ...modeData, ...contentData });
      })
      .catch((error) => setError(error.message));
  }, [darkMode]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!footerData) {
    return <div>Loading...</div>; // Veriler yüklenene kadar "Loading" gösterilir
  }

  return (
    <div className={`w-full p-5 ${footerData.bgColor} ${footerData.textColor}`}>
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5">
        {/* İlk Div: Yazı */}
        <div className="w-[45%]">
          <h2 className="text-4xl font-bold text-left">{footerData.heading}</h2>
        </div>

        {/* İkinci Div: Paragraf ve butonlar */}
        <div className="w-full mt-5 flex items-center">
          {/* Paragraf sola yaslı ve genişliğini kaplar */}
          <p className="flex-grow text-left mt-[5%]">{footerData.paragraph}</p>

          {/* Butonların olduğu div sağa yaslanır */}
          <div className="flex gap-4 justify-end">
            <button
              className={`px-4 py-2 rounded ${footerData.buttonBgColor} ${footerData.buttonTextColor}`}
            >
              {footerData.buttons.personalBlog}
            </button>

            {/* Github button */}
            <button
              className="px-4 py-2 rounded"
              style={{
                background: "white", // Arka plan beyaz olacak
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // Yazıya gradient uygulanacak
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #0000ff, #00ff00)", // Maviden yeşile geçiş
                transition: "all 0.5s ease-in-out", // Geçiş animasyonu
              }}
            >
              {footerData.buttons.github}
            </button>

            {/* Linkedin button - Maviden mora geçiş */}
            <button
              className="px-4 py-2 rounded"
              style={{
                background: "white", // Arka plan beyaz olacak
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // Yazıya gradient uygulanacak
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #0000ff, #800080)", // Maviden mora geçiş
                transition: "all 0.5s ease-in-out", // Geçiş animasyonu
              }}
            >
              {footerData.buttons.linkedin}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
