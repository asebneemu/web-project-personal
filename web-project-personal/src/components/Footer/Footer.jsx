
function Footer() {
  return (
    <div className="w-full bg-gray-100 p-5">
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <div className="w-[1140px] h-auto mx-auto p-5 bg-gray-100">
        {/* İlk Div: Yazı */}
        <div className="w-[45%]">
          <h2 className="text-4xl font-bold text-left">
            Let’s work together on your next product.
          </h2>
        </div>

        {/* İkinci Div: Paragraf ve butonlar */}
        <div className="w-full mt-5 flex items-center">
          {/* Paragraf sola yaslı ve genişliğini kaplar */}
          <p className="flex-grow text-left mt-[5%]">
            We are here to help you build something great and innovative.
          </p>

          {/* Butonların olduğu div sağa yaslanır */}
          <div className="flex gap-4 justify-end">
            <button className="text-black px-4 py-2 rounded">Personal Blog</button>

            {/* Github button */}
            <button
              className="bg-white px-4 py-2 rounded"
              style={{
                background: "white", // Arka plan beyaz olacak
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // Yazıya gradient uygulanacak
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #0000ff, #00ff00)", // Maviden yeşile geçiş
                transition: "all 0.5s ease-in-out", // Geçiş animasyonu
              }}
            >
              Github
            </button>

            {/* Linkedin button - Maviden mora geçiş */}
            <button
              className="bg-white px-4 py-2 rounded"
              style={{
                background: "white", // Arka plan beyaz olacak
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // Yazıya gradient uygulanacak
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #0000ff, #800080)", // Maviden mora geçiş
                transition: "all 0.5s ease-in-out", // Geçiş animasyonu
              }}
            >
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
