function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <div
      className={`w-full flex justify-center items-center h-[100px] ${
        darkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}
    >
      {/* 1140px genişliğinde ortalanmış div */}
      <div className="w-[1140px] h flex justify-end">
        <div className="flex items-center space-x-2">
          <div
            onClick={toggleDarkMode} // Toggle Dark Mode
            className={`relative w-[65px] h-[24px] border-2 border-[#a499ee] rounded-full bg-[#a499ee] flex items-center cursor-pointer`}
          >
            <div
              className={`absolute top-0 w-[20px] h-[20px] rounded-full transition-all duration-300 ${
                darkMode
                  ? "left-0 bg-white"  // Dark mode: Daire beyaz
                  : "left-[40px] bg-[#ffff68]"  // Light mode: Daire sarı
              }`}
            ></div>
          </div>
          <span
            className={`ml-2 flex items-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DarkModeButton;
