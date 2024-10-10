function Heroes() {
    return (
      <div className="w-full bg-gray-100 p-5">
        {/* İçteki Div: 1140px genişliğinde olacak ve ortalanacak */}
        <div className="w-[1141.46px] h-[62px] bg-green-200 flex justify-between items-center mx-auto px-4 mt-[70px] mb-8">
          {/* İlk div: Çevresinde çember olan "A" harfi butonu */}
          <button
            className="flex justify-center items-center w-14 h-14 rounded-full bg-[#EEEBFF] transform -rotate-[-25deg]"
          >
            <span className="text-[#3730A3] text-3xl font-normal">A</span>
          </button>
  
          {/* İkinci div: Üç adet buton */}
          <div className="flex space-x-4">
            <button className="text-[#3730A3] bg-white px-4 py-2 border-2 border-transparent rounded hover:border-2 hover:border-[#3730A3]">
              Skills
            </button>
            <button className="text-[#3730A3] bg-white px-4 py-2 border-2 border-transparent rounded hover:border-2 hover:border-[#3730A3]">
              Projects
            </button>
            <button className="text-[#3730A3] bg-white px-4 py-2 border-2 border-transparent rounded hover:border-2 hover:border-[#3730A3]">
              Hire Me!
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Heroes;
  