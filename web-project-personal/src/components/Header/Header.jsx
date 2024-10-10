import resim from "./person.jpeg";

function Header() {
  return (
    <div className="w-full bg-gray-100 p-5">
      {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
      <header className="w-[1140px] h-auto bg-gray-200 flex mx-auto">
        {/* İlk div: Genişliğin %55'ini kaplayan div */}
        <div className="w-[55%] bg-blue-300 flex flex-col justify-start pt-4 pl-4">
          {/* İç div: Çizgi ve Aleyna Şebnem Uçak yazısı */}
          <div className="flex items-center space-x-4">
            {/* 30px uzunluğunda çizgi */}
            <div className="w-[30px] h-[2px] bg-black"></div>

            {/* İsim yazısı */}
            <span className="text-xl font-semibold">Aleyna Şebnem Uçak</span>
          </div>

          {/* H1: Creative thinker, Minimalism lover */}
          <h1 className="mt-4 text-6xl font-bold pt-10">
            Creative thinker, Minimalism lover
          </h1>

          {/* P: Paragraf metni */}
          <p className="mt-2 text-lg pt-10 pr-20">
            I love to design minimal and creative solutions for complex problems. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo ullam, saepe nemo sit fugit, officia autem assumenda eveniet est ipsa vitae reprehenderit sequi nisi, quidem perspiciatis non. Labore, voluptates!
          </p>

          {/* Div: Üç butondan oluşan container */}
          <div className="mt-4 space-x-4 pt-20 pb-5">
            <button className="bg-white text-[#3730A3] px-4 py-2 rounded hover:bg-[#3730A3] hover:text-white">
              Hire Me!
            </button>
            <button className="bg-white text-[#3730A3] px-4 py-2 rounded hover:bg-[#3730A3] hover:text-white">
              Github
            </button>
            <button className="bg-white text-[#3730A3] px-4 py-2 rounded hover:bg-[#3730A3] hover:text-white">
              Linkedin
            </button>
          </div>
        </div>

        {/* İkinci div: Genişliğin %45'ini kaplayan div, ortalanmış resim */}
        <div className="w-[45%] bg-yellow-300 flex justify-center items-center">
          {/* Resim */}
          <img src={resim} alt="Placeholder" className="h-[428px] object-contain" />
        </div>
      </header>
    </div>
  );
}

export default Header;
